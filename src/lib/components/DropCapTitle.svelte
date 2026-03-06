<script lang="ts">
	import { splitFirstLetter, generateLetterFavicon } from '$lib/config';
	import { browser } from '$app/environment';

	let { title }: { title: string } = $props();

	let dropCap = $derived(splitFirstLetter(title));
	let faviconUrl = $state('');

	$effect(() => {
		if (browser) {
			document.fonts.ready.then(() => {
				faviconUrl = generateLetterFavicon(dropCap.letter);
			});
		}
	});
</script>

<svelte:head>
	<title>{dropCap.rest}</title>
	{#if faviconUrl}
		<link rel="icon" href={faviconUrl} />
	{/if}
</svelte:head>
