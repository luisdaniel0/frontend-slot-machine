<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Graphics } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { COLORS } from '../game/theme';

	const context = getContext();
	const board = $derived(context.stateGameDerived.boardLayout());

	const PAD = 16; // gap between reels and the gold frame
	const RADIUS = 18;

	let glow = $state(false);
	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => (glow = true),
		boardFrameGlowHide: () => (glow = false),
	});

	// Dark inset reel surface (DS --surface-reel / --grad-reel) inside an
	// antique-gold frame with a bright milled-bevel hairline.
	const drawFrame = (g: PIXI.Graphics, w: number, h: number) => {
		const ow = w + PAD * 2;
		const oh = h + PAD * 2;
		const hw = ow / 2;
		const hh = oh / 2;

		// recessed reel surface — vertical reel gradient
		const reel = new PIXI.FillGradient({
			type: 'linear',
			start: { x: 0, y: 0 },
			end: { x: 0, y: 1 },
			colorStops: [
				{ offset: 0, color: COLORS.reelTop },
				{ offset: 1, color: COLORS.reelBottom },
			],
			textureSpace: 'local',
		});
		g.roundRect(-hw, -hh, ow, oh, RADIUS);
		g.fill(reel);

		// gold frame (2-3px) + bright inner hairline for the bevel
		g.roundRect(-hw, -hh, ow, oh, RADIUS);
		g.stroke({ color: COLORS.gold600, width: 4, alignment: 0.5 });
		g.roundRect(-hw + 3, -hh + 3, ow - 6, oh - 6, RADIUS - 2);
		g.stroke({ color: COLORS.gold400, width: 1, alpha: 0.85 });
	};

	// Corner filigree brackets (DS gilded-panel corners).
	const drawFiligree = (g: PIXI.Graphics, w: number, h: number) => {
		const ow = w + PAD * 2;
		const oh = h + PAD * 2;
		const hw = ow / 2;
		const hh = oh / 2;
		const arm = 22; // bracket arm length
		const inset = 7;
		const corners: Array<[number, number, number, number]> = [
			[-hw + inset, -hh + inset, 1, 1], // top-left
			[hw - inset, -hh + inset, -1, 1], // top-right
			[-hw + inset, hh - inset, 1, -1], // bottom-left
			[hw - inset, hh - inset, -1, -1], // bottom-right
		];
		for (const [cx, cy, dx, dy] of corners) {
			g.moveTo(cx + dx * arm, cy);
			g.lineTo(cx, cy);
			g.lineTo(cx, cy + dy * arm);
		}
		g.stroke({ color: COLORS.gold300, width: 2, alpha: 0.9 });
	};

	// Win glow: stacked translucent gold strokes outside the frame (replaces the
	// old mining 'reelhouse' spine), faded in/out via the glow events.
	const drawGlow = (g: PIXI.Graphics, w: number, h: number) => {
		const ow = w + PAD * 2;
		const oh = h + PAD * 2;
		const hw = ow / 2;
		const hh = oh / 2;
		const layers = [
			{ grow: 4, width: 6, alpha: 0.5 },
			{ grow: 10, width: 10, alpha: 0.28 },
			{ grow: 18, width: 16, alpha: 0.14 },
		];
		for (const l of layers) {
			g.roundRect(-hw - l.grow, -hh - l.grow, ow + l.grow * 2, oh + l.grow * 2, RADIUS + l.grow);
			g.stroke({ color: COLORS.gold400, width: l.width, alpha: l.alpha });
		}
	};
</script>

<!-- win glow (behind the frame) -->
<FadeContainer show={glow} duration={250} zIndex={-2}>
	<Graphics x={board.x} y={board.y} draw={(g) => drawGlow(g, board.width, board.height)} />
</FadeContainer>

<!-- recessed reel surface + gold frame -->
<Graphics zIndex={-1} x={board.x} y={board.y} draw={(g) => drawFrame(g, board.width, board.height)} />

<!-- corner filigree -->
<Graphics
	zIndex={-1}
	x={board.x}
	y={board.y}
	draw={(g) => drawFiligree(g, board.width, board.height)}
/>
