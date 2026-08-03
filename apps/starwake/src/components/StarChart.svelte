<script lang="ts">
	/**
	 * The star chart: a mini 5x4 map of the dealt constellation, sitting beside the
	 * board.
	 *
	 * Why it exists: the feature is a SHAPE being drawn, and the main board is a
	 * bad place to show a shape -- it is busy with spinning symbols and the figure
	 * is scattered across it. The chart carries the shape, the progress and the
	 * drama; the board keeps only a faint hint of which cells are live.
	 *
	 * The connecting lines are the point. Real constellations are lines between
	 * stars, so as cells light the crow / bear / dragon literally draws itself. A
	 * segment appears only when BOTH its endpoints are lit, so the figure emerges
	 * in fragments and then joins up.
	 *
	 * Reads the same stateGame.constellation as the board overlay, so the two can
	 * never disagree.
	 */
	import { Container, Circle, Rectangle, Graphics, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
	const constellation = $derived(context.stateGame.constellation);

	// ─────────────────────────────────────────────────────────────────────
	//  TUNE ME
	// ─────────────────────────────────────────────────────────────────────
	/** Where the panel sits, in board coordinates. Negative x = left of the
	 *  board. The board itself spans roughly x 0..600. */
	const CHART_X = -290;
	const CHART_Y = 200;

	const CELL = 34; // size of one mini cell
	const PAD = 18; // padding inside the panel

	const PANEL_FILL = 0x0a1840;
	const PANEL_RING = 0x7fd4ff;
	const GRID_LINE = 0x2b4a8f; // faint grid so positions map to the board
	// ─────────────────────────────────────────────────────────────────────

	const COLS = 5;
	const ROWS = 4;
	const gridW = COLS * CELL;
	const gridH = ROWS * CELL;

	/** Mini-chart position for a PADDED board cell (visible rows are 1..4). */
	const mx = (reel: number) => reel * CELL + CELL / 2;
	const my = (row: number) => (row - 1) * CELL + CELL / 2;

	const isLit = (c: { reel: number; row: number }) =>
		constellation.lit.some((l) => l.reel === c.reel && l.row === c.row);

	/** Segments between CONSECUTIVE cells where both ends are lit. */
	const segments = $derived.by(() => {
		const cells = constellation.cells;
		const out: { x1: number; y1: number; x2: number; y2: number }[] = [];
		for (let i = 0; i < cells.length - 1; i++) {
			const a = cells[i];
			const b = cells[i + 1];
			if (isLit(a) && isLit(b)) {
				out.push({ x1: mx(a.reel), y1: my(a.row), x2: mx(b.reel), y2: my(b.row) });
			}
		}
		return out;
	});
</script>

{#if constellation.active}
	<Container x={CHART_X} y={CHART_Y}>
		<!-- panel -->
		<Rectangle
			x={-PAD}
			y={-PAD}
			width={gridW + PAD * 2}
			height={gridH + PAD * 2 + 34}
			borderRadius={14}
			backgroundColor={PANEL_FILL}
			backgroundAlpha={0.9}
			borderColor={PANEL_RING}
			borderWidth={3}
			borderAlpha={0.9}
		/>

		<!-- faint grid, so a chart position maps to a board position -->
		<Graphics
			draw={(g) => {
				g.clear();
				for (let c = 0; c <= COLS; c++) g.moveTo(c * CELL, 0).lineTo(c * CELL, gridH);
				for (let r = 0; r <= ROWS; r++) g.moveTo(0, r * CELL).lineTo(gridW, r * CELL);
				g.stroke({ color: GRID_LINE, width: 1, alpha: 0.55 });
			}}
		/>

		<!-- the constellation drawing itself: lines first, so stars sit on top -->
		<Graphics
			draw={(g) => {
				g.clear();
				if (!segments.length) return;
				for (const s of segments) g.moveTo(s.x1, s.y1).lineTo(s.x2, s.y2);
				g.stroke({ color: 0xffd45e, width: 3, alpha: 0.95 });
			}}
		/>

		<!-- target cells -->
		{#each constellation.cells as cell (`${cell.reel}-${cell.row}`)}
			{@const lit = isLit(cell)}
			<Circle
				x={mx(cell.reel)}
				y={my(cell.row)}
				anchor={{ x: 0.5, y: 0.5 }}
				diameter={lit ? 15 : 9}
				backgroundColor={lit ? 0xffd45e : 0x16264f}
				backgroundAlpha={1}
				borderColor={lit ? 0xfff3c4 : 0x5b7fc4}
				borderWidth={lit ? 3 : 2}
				borderAlpha={1}
			/>
		{/each}

		<!-- tier + progress -->
		<Text
			x={gridW / 2}
			y={gridH + 16}
			anchor={{ x: 0.5, y: 0.5 }}
			text={`${constellation.tier?.toUpperCase() ?? ''}  ${constellation.lit.length}/${constellation.totalCells}`}
			style={{ fontFamily: 'proxima-nova', fontSize: 20, fill: 0xfff3c4 }}
		/>
	</Container>
{/if}
