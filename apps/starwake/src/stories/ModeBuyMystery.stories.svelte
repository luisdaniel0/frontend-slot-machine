<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'STARWAKE/buy_mystery',
	});
</script>

<script lang="ts">
	/**
	 * buy_mystery (563x) -- "Let the Sky Decide". A weighted roll across all four
	 * tiers: corvus 35.16% / ursa 29.64% / draco 25.15% / ASCENDANT 10.05%.
	 *
	 * Ascendant is the mystery-exclusive outcome and cannot be bought directly: a
	 * Draco dealt with two cells already lit, which completes far more often and
	 * far earlier. It carries ~47% of the mode's payback on 10% of rolls -- the
	 * shape that lets this mode be priced above buy_draco at all.
	 *
	 * The per-tier stories below are the point of this file: you can see what each
	 * roll actually feels like instead of waiting for the weighting to deliver one.
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
	import books from './data/buy_mystery_books';
	import scenarios from './data/buy_mystery_scenarios';

	setContext();

	const play = async (index: number, label: string) => {
		const data = books[index];
		if (!data) {
			console.warn(`[${label}] no book at index ${index} -- re-export buy_mystery`);
			return;
		}
		console.log(`[${label}] book id ${data.id}, pays ${(data.payoutMultiplier / 100).toFixed(2)}x`);
		await playBet({ ...data, state: data.events });
	};

	const at = (name: string) => (scenarios as Record<string, number>)[name] ?? 0;
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

<!-- ASCENDANT: the roll you cannot buy. Two cells pre-lit, ~90% completion. -->
<Story
	name="ascendant wakes"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ascendant_wakes'), 'ascendant_wakes'),
	})}
	{template}
/>

<Story
	name="ascendant top rung"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ascendant_top_rung'), 'ascendant_top_rung'),
	})}
	{template}
/>

<!-- The three purchasable tiers, for comparison against their own buy modes. -->
<Story
	name="rolled corvus"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('corvus_wakes'), 'corvus_wakes'),
	})}
	{template}
/>

<Story
	name="rolled ursa"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_wakes'), 'ursa_wakes'),
	})}
	{template}
/>

<Story
	name="rolled draco"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('draco_wakes'), 'draco_wakes'),
	})}
	{template}
/>

<!-- A roll that fizzles: the carpet paying with no beast. -->
<Story
	name="never completes"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('draco_never_completes'), 'draco_never_completes'),
	})}
	{template}
/>

<Story
	name="max win (25,000x)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('max_win'), 'max_win'),
	})}
	{template}
/>
