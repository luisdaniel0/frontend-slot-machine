<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'MODE_BONUS/book',
	});
</script>

<script lang="ts">
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
	import books from './data/bonus_books';

	setContext();
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
			const data = books[index];
			console.log('Running a book at index', index);
			await playBet({ ...data, state: data.events });
		},
	})}
	{template}
/>

<!-- Deterministic: book 1 is a Super feature that reaches the 25,000x cap
     (wincap), in a bounded 16 spins. Super no longer retriggers, so the
     freeSpinRetrigger handler is exercised by the base-mode (Standard FG) books. -->
<Story
	name="wincap"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			const data = books[1];
			console.log('Running deterministic book at index 1 (wincap)');
			await playBet({ ...data, state: data.events });
		},
	})}
	{template}
/>
