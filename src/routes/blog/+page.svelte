<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DropCapTitle from '$lib/components/DropCapTitle.svelte';
	import { getExcerpt } from '$lib/blog';

	let { data } = $props();
	let posts = $derived(data.posts);
</script>

<DropCapTitle title="The Archives | The Afkara Times" />

<svelte:head>
	<meta
		name="description"
		content="A collection of writings and musings on programming, data science, and technology."
	/>
	<meta property="og:title" content="The Archives | The Afkara Times" />
	<meta
		property="og:description"
		content="A collection of writings and musings on programming, data science, and technology."
	/>
	<meta name="twitter:title" content="The Archives | The Afkara Times" />
	<meta
		name="twitter:description"
		content="A collection of writings and musings on programming, data science, and technology."
	/>
</svelte:head>

<div class="page">
	<Header />

	<h2 class="headline">The Archives</h2>
	<p class="subheadline">A Collection of Writings & Musings</p>

	<div class="divider">
		<span class="divider-ornament">&sect;</span>
	</div>

	<section class="blog-list">
		{#each posts as post}
			<article class="blog-preview">
				<h3 class="blog-preview-title">
					<a href="/blog/{post.slug}">{post.title}</a>
				</h3>
				<p class="blog-preview-date">{post.date}</p>
				<p class="blog-preview-excerpt">{getExcerpt(post.content)}</p>
				<a href="/blog/{post.slug}" class="read-more">Read More &rarr;</a>
			</article>
		{/each}

		{#if posts.length === 0}
			<p class="article" style="text-align: center;">
				No dispatches have yet been published. Check back soon!
			</p>
		{/if}
	</section>

	<Footer />
</div>

<style>
	.blog-list {
		margin: 20px 0;
	}

	.blog-preview {
		border: 1px solid var(--border-color);
		padding: 20px;
		margin-bottom: 25px;
		background: var(--yellowish);
	}

	.blog-preview-title {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--black);
		margin-bottom: 5px;
		background: var(--yellowish);
	}

	.blog-preview-title a {
		color: var(--black);
		text-decoration: none;
		background: transparent;
	}

	.blog-preview-title a:hover {
		text-decoration: underline;
	}

	.blog-preview-date {
		font-family: 'IM Fell English', Georgia, serif;
		font-style: italic;
		font-size: 0.95rem;
		color: var(--dark-yellowish);
		margin-bottom: 15px;
		background: var(--yellowish);
	}

	.blog-preview-excerpt {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--black);
		margin-bottom: 15px;
		background: var(--yellowish);
	}

	.read-more {
		font-family: 'Playfair Display', serif;
		font-size: 0.95rem;
		color: var(--black);
		text-decoration: none;
		border-bottom: 1px solid var(--black);
		background: transparent;
	}

	.read-more:hover {
		color: var(--dark-yellowish);
		border-color: var(--dark-yellowish);
	}

	@media (max-width: 700px) {
		.blog-preview-title {
			font-size: 1.2rem;
		}
	}
</style>
