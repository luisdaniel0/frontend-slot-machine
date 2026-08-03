<script lang="ts">
	/**
	 * Starwake feature overlay: the dealt constellation and the woken beast.
	 *
	 * PLACEHOLDER VISUALS ON PURPOSE. Circles and a labelled block are enough to
	 * answer the questions a playtest has to answer -- does the fill read at speed,
	 * does the snowball feel like it accelerates, does a 2x2 beast roaming a 5x4
	 * board feel good or cramped. Real art replaces the shapes, not the logic.
	 *
	 * Renders purely from stateGame.constellation, which is a projection of the
	 * book tape, so this stays correct for replays that start mid-feature.
	 *
	 * Everything you would want to fiddle with lives in the TUNE ME block below.
	 */
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Container, Circle, Rectangle, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getSymbolX } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';

	const context = getContext();
	const constellation = $derived(context.stateGame.constellation);

	// ─────────────────────────────────────────────────────────────────────
	//  TUNE ME. Change a number, save, and Storybook reloads instantly.
	//  These are placeholder visuals -- the point is that the feature READS
	//  clearly at speed, not that it looks good. Real art replaces the shapes.
	// ─────────────────────────────────────────────────────────────────────

	/** How long the beast takes to prowl to its next spot, in milliseconds.
	 *  Lower = snappier. Try 200 (fast) or 900 (slow, more creature-like). */
	const ROAM_MS = 700;

	/** Unlit target cell: only a HINT that this cell is live. The StarChart
	 *  carries the shape and the progress, so the board stays readable --
	 *  this just tells you which cells you are hoping a win crosses. */
	const UNLIT_SIZE = 0.22; // fraction of a cell
	const UNLIT_FILL = 0x0a1840;
	const UNLIT_RING = 0x7fd4ff;
	const UNLIT_ALPHA = 0.5;

	/** Lit cell: a star drawn in, now a sticky wild. Stays prominent -- this is
	 *  the payoff moment and it must be obvious on the board itself. */
	const LIT_SIZE = 0.45;
	const LIT_FILL = 0xffd45e;
	const LIT_RING = 0xfff3c4;

	/** The woken beast block. */
	const BEAST_FILL = 0x3a1466;
	const BEAST_RING = 0xffd45e;
	const BEAST_TEXT = 40; // font size

	// ─────────────────────────────────────────────────────────────────────

	/**
	 * STATIC y for a padded row -- deliberately NOT read off the symbol occupying
	 * that cell.
	 *
	 * The symbol's own y is a spin tween: during a spin it scrolls. An earlier
	 * version read it "so markers cannot drift", which did guarantee alignment but
	 * also made the whole overlay inherit the reel animation -- the beast appeared
	 * to be spun down with the reels every spin instead of holding position.
	 *
	 * The overlay is anchored to the BOARD, not to the symbols moving through it.
	 * The reveal board is 6 rows (one padding row top and bottom), so padded rows
	 * 1..4 are the visible ones and row 1 sits half a cell below the board top.
	 */
	const cellY = (_reel: number, row: number) => (row - 0.5) * SYMBOL_SIZE;

	const isLit = (reel: number, row: number) =>
		constellation.lit.some((c) => c.reel === reel && c.row === row);

	// Beast footprint: one block spanning its cells rather than per-cell tiles, so
	// it reads as a single creature. beastShape is {reels, rows} (2x2 today).
	const beastBox = $derived.by(() => {
		const cells = constellation.beastCells;
		if (!cells.length) return undefined;
		const reels = cells.map((c) => c.reel);
		const rows = cells.map((c) => c.row);
		const minReel = Math.min(...reels);
		const maxReel = Math.max(...reels);
		const minRow = Math.min(...rows);
		const maxRow = Math.max(...rows);
		const left = getSymbolX(minReel);
		const right = getSymbolX(maxReel);
		const top = cellY(minReel, minRow);
		const bottom = cellY(minReel, maxRow);
		return {
			x: (left + right) / 2,
			y: (top + bottom) / 2,
			width: right - left + SYMBOL_SIZE,
			height: bottom - top + SYMBOL_SIZE,
		};
	});

	// The beast PERSISTS and PROWLS: it is one creature that stays on the board
	// for the whole roam and travels to its next position, rather than vanishing
	// and reappearing each spin. So the drawn position is tweened, not snapped --
	// only the FIRST placement (the wake) is instant, since it has nowhere to
	// travel from.
	const beastX = new Tween(0, { duration: ROAM_MS, easing: cubicOut });
	const beastY = new Tween(0, { duration: ROAM_MS, easing: cubicOut });
	let placed = false;

	$effect(() => {
		const box = beastBox;
		if (!box) {
			// feature over (or not woken yet) -- next wake should appear, not fly in
			placed = false;
			return;
		}
		if (!placed) {
			beastX.set(box.x, { duration: 0 });
			beastY.set(box.y, { duration: 0 });
			placed = true;
		} else {
			beastX.set(box.x);
			beastY.set(box.y);
		}
	});
</script>

{#if constellation.active}
	<!-- Target cells: an UNLIT cell must be clearly legible against a dark, busy
	     board -- the whole point of the deal is that you can see what you are
	     chasing. Hence a large bright ring rather than a subtle dot. -->
	{#each constellation.cells as cell (`${cell.reel}-${cell.row}`)}
		{@const lit = isLit(cell.reel, cell.row)}
		<Container x={getSymbolX(cell.reel)} y={cellY(cell.reel, cell.row)}>
			{#if lit}
				<!-- A lit star is a STICKY WILD: it must look nailed to the board while
				     the reels spin past it. The reel system has no concept of holding a
				     symbol (no hold/sticky API in utils-slots), and the math still drops
				     a fresh W into this cell every spin -- so the symbol underneath
				     scrolls. Covering the whole cell opaquely is what makes it read as
				     stationary. Same trick as the beast block.
				     PROPER FIX LATER: teach the reel to skip these rows when spinning. -->
				<Rectangle
					anchor={{ x: 0.5, y: 0.5 }}
					width={SYMBOL_SIZE * 0.96}
					height={SYMBOL_SIZE * 0.96}
					borderRadius={12}
					backgroundColor={LIT_FILL}
					backgroundAlpha={1}
					borderColor={LIT_RING}
					borderWidth={4}
					borderAlpha={1}
				/>
				<Text
					anchor={{ x: 0.5, y: 0.5 }}
					text="W"
					style={{ fontFamily: 'proxima-nova', fontSize: 46, fill: 0x3a1466 }}
				/>
			{:else}
				<Circle
					anchor={{ x: 0.5, y: 0.5 }}
					diameter={SYMBOL_SIZE * UNLIT_SIZE}
					backgroundColor={UNLIT_FILL}
					backgroundAlpha={UNLIT_ALPHA}
					borderColor={UNLIT_RING}
					borderWidth={2}
					borderAlpha={UNLIT_ALPHA}
				/>
			{/if}
		</Container>
	{/each}


	<!-- The woken beast. Position comes from the tween, not the raw box, so it
	     glides between cells and stays on the board across spins. -->
	{#if beastBox}
		<Container x={beastX.current} y={beastY.current}>
			<!-- OPAQUE on purpose. The math puts real W symbols in these cells, so
			     they scroll away with the reels on every spin. A translucent block
			     let that show through and the beast looked like it dropped and
			     re-landed each spin instead of staying put. Covering the cells
			     completely is what makes it read as one creature that prowls. -->
			<Rectangle
				anchor={{ x: 0.5, y: 0.5 }}
				width={beastBox.width * 0.98}
				height={beastBox.height * 0.98}
				borderRadius={16}
				backgroundColor={BEAST_FILL}
				backgroundAlpha={1}
				borderColor={BEAST_RING}
				borderWidth={7}
				borderAlpha={1}
			/>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				text={`${constellation.tier?.toUpperCase() ?? 'BEAST'}\n×${constellation.multiplier}`}
				style={{
					fontFamily: 'proxima-nova',
					fontSize: BEAST_TEXT,
					fill: 0xffffff,
					align: 'center',
					lineHeight: 44,
				}}
			/>
		</Container>
	{/if}
{/if}
