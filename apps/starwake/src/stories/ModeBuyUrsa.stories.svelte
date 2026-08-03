<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'STARWAKE/buy_ursa',
	});
</script>

<script lang="ts">
	/**
	 * buy_ursa (240x) -- the reliable tier. 4 cells, 10 spins, ~84% completion.
	 * Lowest volatility buy and the only one that cannot reach 25,000x; it
	 * publishes an honest 10,000x instead.
	 *
	 * Named stories play a SPECIFIC book so a feel question can be answered on
	 * demand instead of by spinning and hoping. Indices come from the generated
	 * scenario map, so they stay correct when the books are re-exported.
	 */
	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';
	import { randomInteger } from 'utils-shared/random';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBet } from '../game/utils';
	import books from './data/buy_ursa_books';
	import scenarios from './data/buy_ursa_scenarios';

	setContext();

	const play = async (index: number, label: string) => {
		const data = books[index];
		if (!data) {
			console.warn(`[${label}] no book at index ${index} -- re-export buy_ursa`);
			return;
		}
		console.log(`[${label}] book id ${data.id}, pays ${(data.payoutMultiplier / 100).toFixed(2)}x`);
		await playBet({ ...data, state: data.events });
	};

	const at = (name: keyof typeof scenarios) => (scenarios as Record<string, number>)[name] ?? 0;
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
	name="random"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			const index = randomInteger({ min: 0, max: books.length - 1 });
			console.log('Running a book at index', index);
			await play(index, 'random');
		},
	})}
	{template}
/>

<!-- The crow wakes and roams: the tier's normal, expected outcome. -->
<Story
	name="wakes"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_wakes'), 'ursa_wakes'),
	})}
	{template}
/>

<!-- Beast reaches the top of its 9-rung ladder (200x). -->
<Story
	name="top rung"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_top_rung_2'), 'ursa_top_rung_2'),
	})}
	{template}
/>

<!-- Completed on the last spin: rides the 2-spin guaranteed roam floor. -->
<Story
	name="roam floor"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_roam_floor'), 'ursa_roam_floor'),
	})}
	{template}
/>

<!-- Never completes -- the carpet paying on its own. ~16% of corvus buys. -->
<Story
	name="never completes"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_never_completes'), 'ursa_never_completes'),
	})}
	{template}
/>

<!-- The mode's published ceiling (25,000x). -->
<Story
	name="max win (25,000x)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('max_win'), 'max_win'),
	})}
	{template}
/>
