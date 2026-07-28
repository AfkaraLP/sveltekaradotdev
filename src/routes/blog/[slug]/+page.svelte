<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import DropCapTitle from "$lib/components/DropCapTitle.svelte";

	let { data } = $props();
	let post = $derived(data.post);
	let pageTitle = $derived(`${post.title} | The Afkara Times`);
</script>

<DropCapTitle title={pageTitle} />

<svelte:head>
	<meta name="description" content={post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="article:published_time" content={post.date} />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
</svelte:head>

<div class="page">
	<Header />

	<article class="blog-post">
		<h2 class="headline">{post.title}</h2>
		<p class="subheadline">{post.date}</p>

		<div class="divider">
			<span class="divider-ornament">&sect;</span>
		</div>

		<div class="blog-content">
			{@html post.htmlContent}
		</div>
	</article>

	<div class="divider">
		<span class="divider-ornament">&#10087;</span>
	</div>

	<p style="text-align: center;">
		<a href="/blog" class="back-link">&larr; Return to Archives</a>
	</p>

	<Footer />
</div>

<style>
	.blog-post {
		margin: 20px 0;
	}

	.blog-content {
		font-family: "IM Fell English", Georgia, serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--black);
		background: var(--yellowish);
	}

	.blog-content :global(h1),
	.blog-content :global(h2),
	.blog-content :global(h3),
	.blog-content :global(h4),
	.blog-content :global(h5),
	.blog-content :global(h6) {
		font-family: "Playfair Display", serif;
		color: var(--black);
		margin: 25px 0 15px;
		background: var(--yellowish);
	}

	.blog-content :global(h1) {
		font-size: 2rem;
		border-bottom: 2px solid var(--border-color);
		padding-bottom: 10px;
	}

	.blog-content :global(h2) {
		font-size: 1.6rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 8px;
	}

	.blog-content :global(h3) {
		font-size: 1.3rem;
	}

	.blog-content :global(p) {
		margin-bottom: 15px;
		text-align: justify;
		background: var(--yellowish);
	}

	.blog-content :global(ul),
	.blog-content :global(ol) {
		margin: 15px 0 15px 30px;
		background: var(--yellowish);
	}

	.blog-content :global(li) {
		margin-bottom: 8px;
		background: var(--yellowish);
	}

	.blog-content :global(blockquote) {
		border-left: 3px double var(--border-color);
		margin: 20px 0;
		padding: 10px 20px;
		font-style: italic;
		background: var(--yellowish);
	}

	.blog-content :global(code) {
		font-family: "Courier Prime", "Courier New", "Courier", monospace;
		background: #e8d9bc;
		padding: 1px 7px;
		font-size: 0.88em;
		border: 1px solid #c4b08a;
		border-radius: 0;
		color: #3e2a18;
		letter-spacing: 0.02em;
		box-shadow: inset 0 1px 2px rgba(42, 34, 24, 0.08);
	}

	.blog-content :global(pre) {
		position: relative;
		background: linear-gradient(
			168deg,
			#e2d1b0 0%,
			#d8c8a4 25%,
			#d0be98 50%,
			#cbb690 75%,
			#c7b28c 100%
		);
		padding: 0;
		overflow: hidden;
		margin: 30px 0;
		border: none;

		outline: 1px solid #8a7a5e;
		outline-offset: -1px;
		box-shadow:
			inset 0 0 0 4px #d4c4a8,
			inset 0 0 0 5px #6b5d42,
			inset 0 0 0 8px #d4c4a8,
			inset 0 0 0 9px #8a7a5e,
			0 4px 16px rgba(42, 34, 24, 0.15),
			0 1px 3px rgba(42, 34, 24, 0.1);
	}

	.blog-content :global(pre::before) {
		content: "";
		position: absolute;
		top: 12px;
		left: 12px;
		right: 12px;
		bottom: 12px;
		border: 1px solid rgba(107, 93, 66, 0.25);
		pointer-events: none;
		z-index: 2;
	}

	.blog-content :global(pre::after) {
		content: attr(data-lang);
		position: absolute;
		top: 0;
		right: 0;
		font-family: "Playfair Display", serif;
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		color: #8a7a5e;
		background: #d4c4a8;
		padding: 2px 14px 2px 12px;
		border-left: 1px solid #8a7a5e;
		border-bottom: 1px solid #8a7a5e;
		z-index: 3;
	}

	.blog-content :global(pre code) {
		display: block;
		padding: 24px 22px 22px;
		background: transparent;
		font-family: "Courier Prime", "Courier New", "Courier", monospace;
		font-size: 0.88rem;
		line-height: 1.7;
		color: #3e2a18;
		letter-spacing: 0.01em;
		overflow-x: auto;
		border: none;
		box-shadow: none;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		tab-size: 4;
		counter-reset: code-line;
	}

	.blog-content :global(pre code .hljs-ln-line) {
		counter-increment: code-line;
	}

	.blog-content :global(a) {
		color: var(--black);
		text-decoration: underline;
		background: transparent;
	}

	.blog-content :global(strong) {
		font-weight: bold;
		background: var(--yellowish);
	}

	.blog-content :global(em) {
		font-style: italic;
		background: var(--yellowish);
	}

	:global(.hljs-comment),
	:global(.hljs-quote) {
		color: #9a8e7a;
		font-style: italic;
	}

	:global(.hljs-keyword),
	:global(.hljs-selector-tag),
	:global(.hljs-subst) {
		color: #3a2410;
		font-weight: 700;
	}

	:global(.hljs-string),
	:global(.hljs-doctag) {
		color: #7a3322;
	}

	:global(.hljs-number),
	:global(.hljs-literal),
	:global(.hljs-variable),
	:global(.hljs-template-variable) {
		color: #5c3a18;
	}

	:global(.hljs-title),
	:global(.hljs-section) {
		color: #2a1808;
		font-weight: 700;
	}

	:global(.hljs-built_in),
	:global(.hljs-type) {
		color: #4a3018;
		font-style: italic;
	}

	:global(.hljs-attr),
	:global(.hljs-attribute),
	:global(.hljs-params) {
		color: #604020;
	}

	:global(.hljs-meta) {
		color: #7a6a50;
		font-style: italic;
		letter-spacing: 0.03em;
	}

	:global(.hljs-addition) {
		background: rgba(50, 90, 40, 0.1);
		border-left: 2px solid rgba(50, 90, 40, 0.4);
	}

	:global(.hljs-deletion) {
		background: rgba(120, 40, 30, 0.1);
		border-left: 2px solid rgba(120, 40, 30, 0.35);
		text-decoration: line-through;
		text-decoration-color: rgba(120, 40, 30, 0.3);
	}

	:global(.hljs-punctuation) {
		color: #6b5840;
	}

	:global(.hljs-property) {
		color: #544028;
	}

	.blog-content :global(pre code::selection),
	.blog-content :global(pre code *::selection) {
		background: rgba(42, 34, 24, 0.15);
		color: #2a1808;
	}

	@media (max-width: 700px) {
		.blog-content :global(pre) {
			margin-left: -10px;
			margin-right: -10px;
			box-shadow:
				inset 0 0 0 3px #d4c4a8,
				inset 0 0 0 4px #6b5d42,
				inset 0 0 0 6px #d4c4a8,
				inset 0 0 0 7px #8a7a5e,
				0 3px 10px rgba(42, 34, 24, 0.12);
		}

		.blog-content :global(pre::before) {
			top: 10px;
			left: 10px;
			right: 10px;
			bottom: 10px;
		}

		.blog-content :global(pre code) {
			padding: 20px 16px 16px;
			font-size: 0.82rem;
		}
	}
</style>
