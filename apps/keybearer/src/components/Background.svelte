<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Graphics } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { COLORS, THEME } from '../game/theme';
	import Starfield from './Starfield.svelte';

	const context = getContext();
	const canvas = $derived(context.stateLayoutDerived.canvasSizes());
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');

	// DS --grad-night: radial-gradient(140% 110% at 50% -10%) — a soft twilight
	// glow at the top-centre fading to near-black. textureSpace 'local' maps the
	// 0-1 gradient coords onto the rect bounds, so it tracks any canvas size.
	const nightGradient = (g: PIXI.Graphics, width: number, height: number) => {
		const grad = new PIXI.FillGradient({
			type: 'radial',
			center: { x: 0.5, y: -0.1 },
			innerRadius: 0,
			outerCenter: { x: 0.5, y: -0.1 },
			outerRadius: 1.15,
			colorStops: [
				{ offset: 0, color: THEME.gradNightInner },
				{ offset: 0.55, color: THEME.gradNightMid },
				{ offset: 1, color: THEME.gradNightOuter },
			],
			textureSpace: 'local',
		});
		g.rect(0, 0, width, height);
		g.fill(grad);
	};

	// A faint arcane bloom from below for the feature, so freespins read as a
	// different, more charged space without needing new art.
	const featureBloom = (g: PIXI.Graphics, width: number, height: number) => {
		const grad = new PIXI.FillGradient({
			type: 'radial',
			center: { x: 0.5, y: 1.05 },
			innerRadius: 0,
			outerCenter: { x: 0.5, y: 1.05 },
			outerRadius: 0.9,
			colorStops: [
				{ offset: 0, color: COLORS.arcane500 },
				{ offset: 1, color: COLORS.arcane500 },
			],
			textureSpace: 'local',
		});
		g.rect(0, 0, width, height);
		g.fill({ fill: grad, alpha: 0.18 });
	};
</script>

<!-- base fill (covers any gradient gaps / letterboxing) -->
<Graphics
	zIndex={-3}
	draw={(g) => {
		g.rect(0, 0, canvas.width, canvas.height);
		g.fill({ color: THEME.bgBase });
	}}
/>

<!-- twilight radial gradient -->
<Graphics zIndex={-3} draw={(g) => nightGradient(g, canvas.width, canvas.height)} />

<!-- faint multi-colour starfield -->
<Starfield width={canvas.width} height={canvas.height} zIndex={-2} />

<!-- feature: arcane bloom rising from below -->
<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-2}>
	<Graphics draw={(g) => featureBloom(g, canvas.width, canvas.height)} />
</FadeContainer>
