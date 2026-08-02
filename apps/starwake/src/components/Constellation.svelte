<script lang="ts">
	/**
	 * Starwake feature overlay: the dealt constellation and the woken beast.
	 *
	 * PLACEHOLDER VISUALS ON PURPOSE. Circles and a labelled block are enough to
	 * answer the questions a playtest has to answer -- does the fill read at speed,
	 * does the snowball feel like it accelerates, does a 2x2 beast roaming a 5x4
	 * board feel good or cramped. Real art replaces the shapes, not the logic.
	 *
	 * Renders purely from stateGame.constellation, which is a projection of the book
	 * tape, so this is correct for replays that start mid-feature.
	 *
	 * Cell coordinates are PADDED board space (the reveal board is 6 rows; visible
	 * rows are 1..4). Rather than re-deriving the padding offset -- easy to get
	 * wrong, and it would silently drift if the board layout ever changed -- each
	 * marker reads the live y straight off the symbol occupying that cell, so it is
	 * aligned by construction.
	 */
	import { Container, Circle, Rectangle, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getSymbolX } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';

	const context = getContext();
	const constellation = $derived(context.stateGame.constellation);

	/** Live y of whatever symbol sits in that padded row, so markers can't drift. */
	const cellY = (reel: number, row: number) => {
		const symbols = context.stateGame.board[reel]?.reelState.symbols;
		return symbols?.[row]?.symbolY() ?? (row + 0.5) * SYMBOL_SIZE;
	};

	const isLit = (reel: number, row: number) =>
		constellation.lit.some((c) => c.reel === reel && c.row === row);

	// Beast footprint: draw one block spanning its cells rather than per-cell tiles,
	// so it reads as a single creature. beastShape is [w,h] in cells (2x2 today).
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
</script>

{#if constellation.active}
	<!-- Target cells: an UNLIT cell must be clearly legible against a dark, busy
	     board -- the whole point of the deal is that you can see what you are
	     chasing. Hence a large bright ring rather than a subtle dot. -->
	{#each constellation.cells as cell (`${cell.reel}-${cell.row}`)}
		{@const lit = isLit(cell.reel, cell.row)}
		<Container x={getSymbolX(cell.reel)} y={cellY(cell.reel, cell.row)}>
			<Circle
				anchor={{ x: 0.5, y: 0.5 }}
				diameter={lit ? SYMBOL_SIZE * 0.45 : SYMBOL_SIZE * 0.52}
				backgroundColor={lit ? 0xffd45e : 0x0a1840}
				backgroundAlpha={lit ? 0.95 : 0.6}
				borderColor={lit ? 0xfff3c4 : 0x7fd4ff}
				borderWidth={lit ? 5 : 5}
				borderAlpha={1}
			/>
		</Container>
	{/each}

	<!-- Progress readout, with a backing plate so it stays legible over the
	     background art (the first version was unreadable without one). -->
	<Container x={getSymbolX(0) - SYMBOL_SIZE * 0.35} y={-SYMBOL_SIZE * 0.42}>
		<Rectangle
			anchor={{ x: 0, y: 0.5 }}
			width={330}
			height={54}
			borderRadius={12}
			backgroundColor={0x0a1840}
			backgroundAlpha={0.85}
			borderColor={0x7fd4ff}
			borderWidth={3}
			borderAlpha={0.9}
		/>
		<Text
			x={16}
			anchor={{ x: 0, y: 0.5 }}
			text={`${constellation.tier?.toUpperCase() ?? ''}  ${constellation.lit.length}/${constellation.totalCells}${constellation.complete ? '  AWAKE' : ''}`}
			style={{ fontFamily: 'proxima-nova', fontSize: 32, fill: 0xfff3c4 }}
		/>
	</Container>

	<!-- the woken beast: one block over its footprint, with its climbing multiplier -->
	{#if beastBox}
		<Container x={beastBox.x} y={beastBox.y}>
			<Rectangle
				anchor={{ x: 0.5, y: 0.5 }}
				width={beastBox.width * 0.92}
				height={beastBox.height * 0.92}
				borderRadius={16}
				backgroundColor={0x7f3fbf}
				backgroundAlpha={0.55}
				borderColor={0xffd45e}
				borderWidth={6}
				borderAlpha={1}
			/>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				text={`${constellation.tier?.toUpperCase() ?? 'BEAST'}\n×${constellation.multiplier}`}
				style={{
					fontFamily: 'proxima-nova',
					fontSize: 40,
					fill: 0xffffff,
					align: 'center',
					lineHeight: 44,
				}}
			/>
		</Container>
	{/if}
{/if}
