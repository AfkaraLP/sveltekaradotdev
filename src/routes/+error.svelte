<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DropCapTitle from '$lib/components/DropCapTitle.svelte';
</script>

<DropCapTitle title="Page Not Found | The Afkara Gazette" />

<div class="page">
	<Header />

	<h2 class="headline">Page Not Found</h2>
	<p class="subheadline">Error 404</p>

	<div class="divider">
		<span class="divider-ornament">&sect;</span>
	</div>

	<p class="article" style="text-align: center;">
		Alas! The page you seek has been lost to the annals of time, or perhaps never existed at all.
	</p>

	<p style="text-align: center;">
		<a href="/" class="back-link">&larr; Return to the Front Page</a>
	</p>

	<Footer />
</div>

<style>
	/* Error page has no unique styles - all classes used (.page, .headline,
	   .subheadline, .divider, .divider-ornament, .article, .back-link)
	   are global styles from the layout */
</style>
