<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'STARWAKE/session',
	});
</script>

<script lang="ts">
	/**
	 * Play a RUN of base spins back to back, the way a player would, and print a
	 * summary to the console.
	 *
	 * Two things make this different from clicking the "random" story repeatedly:
	 *
	 * 1. WEIGHTED SAMPLING. The book pool is quota-shaped -- base is built with
	 *    ~40% zero-win books by construction -- and the optimizer's WEIGHTS are
	 *    what turn that into the real distribution (true bust rate 70.75%). Picking
	 *    a book uniformly shows a game far kinder than the real one, so this picks
	 *    proportional to weight, exactly as the RGS would.
	 *
	 * 2. It runs long enough to feel the pacing. Judging dryness from single spins
	 *    is hopeless when 7 in 10 are dead.
	 *
	 * The summary answers the two open questions directly: how dead does it feel,
	 * and how many "wins" actually returned less than the stake.
	 */
	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBet } from '../game/utils';
	import books from './data/base_books';
	import weights from './data/base_weights';

	setContext();

	// cumulative weights once, so each pick is a cheap binary search
	const cumulative: number[] = [];
	let total = 0;
	for (const w of weights as number[]) {
		total += w;
		cumulative.push(total);
	}

	const pickWeighted = () => {
		const r = Math.random() * total;
		let lo = 0;
		let hi = cumulative.length - 1;
		while (lo < hi) {
			const mid = (lo + hi) >> 1;
			if (cumulative[mid] < r) lo = mid + 1;
			else hi = mid;
		}
		return lo;
	};

	const runSession = async (spins: number) => {
		const bet = 1; // book payouts are x100 of the bet
		let paid = 0;
		let atLeastStake = 0;
		let below = 0;
		let returned = 0;
		let best = 0;
		let features = 0;
		let deadStreak = 0;
		let worstDeadStreak = 0;

		console.log(`--- session: ${spins} base spins, weighted like the RGS ---`);

		for (let i = 0; i < spins; i++) {
			const index = pickWeighted();
			const data = books[index];
			const win = data.payoutMultiplier / 100;

			returned += win;
			if (win > 0) {
				paid++;
				if (win >= bet) atLeastStake++;
				else below++;
				deadStreak = 0;
			} else {
				deadStreak++;
				if (deadStreak > worstDeadStreak) worstDeadStreak = deadStreak;
			}
			if (win > best) best = win;
			if (data.events.some((e: { type: string }) => e.type === 'constellationDealt')) features++;

			await playBet({ ...data, state: data.events });
		}

		const pct = (n: number) => ((n / spins) * 100).toFixed(1) + '%';
		console.log(
			`\n=== ${spins} spins, staked ${spins.toFixed(2)}, returned ${returned.toFixed(2)} ` +
				`(${((returned / spins) * 100).toFixed(1)}% this session) ===\n` +
				`  dead spins          ${String(spins - paid).padStart(4)}  ${pct(spins - paid)}\n` +
				`  paid something      ${String(paid).padStart(4)}  ${pct(paid)}\n` +
				`    ...below stake    ${String(below).padStart(4)}  ${pct(below)}   <- "wins" that lost money\n` +
				`    ...at/above stake ${String(atLeastStake).padStart(4)}  ${pct(atLeastStake)}\n` +
				`  features triggered  ${String(features).padStart(4)}\n` +
				`  longest dead streak ${String(worstDeadStreak).padStart(4)} spins\n` +
				`  best single win     ${best.toFixed(2)}x\n` +
				`\n  expected over a long run: 70.8% dead, 17.7% below stake, 11.6% at/above,\n` +
				`  a feature every ~148 spins. Short sessions vary a lot -- run it a few times.`,
		);
	};
</script>

{#snippet template(args: TemplateArgs<any>)}
	<StoryGameTemplate
		skipLoadingScreen={args.skipLoadingScreen}
		action={async () => {
			await args.action?.(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story
	name="run 25 spins"
	args={templateArgs({ skipLoadingScreen: true, data: {}, action: async () => await runSession(25) })}
	{template}
/>

<Story
	name="run 100 spins"
	args={templateArgs({ skipLoadingScreen: true, data: {}, action: async () => await runSession(100) })}
	{template}
/>

<Story
	name="run 300 spins"
	args={templateArgs({ skipLoadingScreen: true, data: {}, action: async () => await runSession(300) })}
	{template}
/>
