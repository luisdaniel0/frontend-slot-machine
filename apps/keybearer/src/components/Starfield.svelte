<script lang="ts" module>
	// Deterministic faint multi-color starfield (DS: "tiny radial-gradient dots").
	// Positions are generated once in normalised [0,1] space with a fixed seed so
	// the field is stable across re-renders, then scaled to the live canvas.
	import { STAR_COLORS } from '../game/theme';

	type Star = { nx: number; ny: number; r: number; alpha: number; color: number };

	const mulberry32 = (seed: number) => () => {
		seed |= 0;
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};

	const STARS: Star[] = (() => {
		const rand = mulberry32(0x6b657942); // "keyB"
		const list: Star[] = [];
		for (let i = 0; i < 110; i += 1) {
			const bright = rand() > 0.88; // a few brighter sparkles
			list.push({
				nx: rand(),
				ny: rand(),
				r: bright ? 1.4 + rand() * 1.4 : 0.5 + rand() * 1.1,
				alpha: bright ? 0.5 + rand() * 0.4 : 0.12 + rand() * 0.33,
				// mostly paper-white, occasionally an accent colour
				color: rand() > 0.7 ? STAR_COLORS[1 + Math.floor(rand() * 4)] : STAR_COLORS[0],
			});
		}
		return list;
	})();
</script>

<script lang="ts">
	import { Graphics } from 'pixi-svelte';

	type Props = { width: number; height: number; zIndex?: number };
	const props: Props = $props();
</script>

<Graphics
	zIndex={props.zIndex ?? -2}
	draw={(g) => {
		for (const s of STARS) {
			g.circle(s.nx * props.width, s.ny * props.height, s.r);
			g.fill({ color: s.color, alpha: s.alpha });
		}
	}}
/>
