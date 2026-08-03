<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'STARWAKE/ante_starfall',
	});
</script>

<script lang="ts">
	/**
	 * ante_starfall (1.5x) -- the juiced hunt. Denser star scatters mean more
	 * triggers AND a richer tier mix (draco is ~1.9x likelier than in base), so a
	 * feature lands every ~100 spins instead of ~148.
	 *
	 * Counterintuitively it is the CALMER mode: same 0.9665 RTP delivered in more,
	 * smaller chunks, so std drops 24.16 -> 21.93. That matches the market (MIKO's
	 * ante halves its base volatility). It is the mode for players who like the
	 * hunt but not the wait -- not a lottery ticket.
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
	import books from './data/ante_starfall_books';
	import scenarios from './data/ante_starfall_scenarios';

	setContext();

	const play = async (index: number, label: string) => {
		const data = books[index];
		if (!data) {
			console.warn(`[${label}] no book at index ${index} -- re-export ante_starfall`);
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

<!-- The rare 5-scatter trigger: the dragon, reached from an ante spin. -->
<Story
	name="draco wakes"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('draco_wakes'), 'draco_wakes'),
	})}
	{template}
/>

<Story
	name="draco top rung"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('draco_top_rung'), 'draco_top_rung'),
	})}
	{template}
/>

<!-- The tier mix an ante spin can deal. -->
<Story
	name="corvus (3 scatters)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('corvus_wakes'), 'corvus_wakes'),
	})}
	{template}
/>

<Story
	name="ursa (4 scatters)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => await play(at('ursa_wakes'), 'ursa_wakes'),
	})}
	{template}
/>

<Story
	name="draco (5 scatters)"
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
