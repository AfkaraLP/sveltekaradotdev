<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import DropCapTitle from "$lib/components/DropCapTitle.svelte";
	import BookmarkCard from "$lib/components/BookmarkCard.svelte";
	import { PROJECTS, BOOKMARKS } from "$lib/config";

	const projects = PROJECTS;
	const bookmarks = BOOKMARKS;
	const half = Math.ceil(projects.length / 2);
	const firstHalf = projects.slice(0, half);
	const secondHalf = projects.slice(half);

	let showAllBookmarks = $state(false);
	const visibleBookmarks = $derived(showAllBookmarks ? bookmarks : bookmarks.slice(0, 3));
	const hasMore = bookmarks.length > 3;
</script>

<DropCapTitle title="The Afkara Gazette" />

<div class="page">
	<Header />

	<h2 class="headline">Developer & Creator Extraordinaire</h2>
	<p class="subheadline">Creating Bits and Bytes + Occasional Digital Noises</p>

	<div class="divider">
		<span class="divider-ornament">&sect;</span>
	</div>

	<section id="about">
		<h3 class="section-header">About the Publisher</h3>
		<p class="drop-cap">
			Greetings, dear reader! I am AfkaraLP, a maker of music and software in
			equal measure. My primary pursuit lies in the creation of Future
			Bounce&mdash;a genre that brings me great joy (They forced me to say
			this). By day, I pursue the scholarly art of Data Science as a Bachelor's
			student, seeking to unravel the mysteries hidden within numbers and
			patterns.
		</p>
		<p class="article">
			My weapon of choice in the realm of programming is Rust, a language of
			elegance and safety. I am a devoted user of NixOS (by the way) and harbour
			a deep appreciation for the functional programming paradigm. Beyond the
			digital realm, one might find me engaged in sporting activities or
			experimenting in the culinary arts.
		</p>
	</section>

	<div class="divider">
		<span class="divider-ornament">&#10087;</span>
	</div>

	<section id="projects">
		<h3 class="section-header">Notable Works & Endeavours</h3>

		<div class="columns">
			<div class="column">
				{#each firstHalf as project}
					<ProjectCard {project} />
				{/each}
			</div>
			<div class="column">
				{#each secondHalf as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>

	<div class="divider">
		<span class="divider-ornament">$</span>
	</div>

	<section id="bookmarks">
		<h3 class="section-header">Recommended Reading for the Curious Mind</h3>
		<div class="bookmark-contents">
			{#each visibleBookmarks as bookmark}
				<BookmarkCard {bookmark} />
			{/each}
		</div>
		{#if hasMore}
			<button class="view-more-btn" onclick={() => showAllBookmarks = !showAllBookmarks}>
				{showAllBookmarks ? '— Conceal the Remainder —' : '— Reveal All Entries —'}
			</button>
		{/if}
	</section>
	
	<div class="divider">
		<span class="divider-ornament">&#10022;</span>
	</div>

	<section id="contact">
		<div class="contact-section">
			<h3 class="contact-header">Correspondence</h3>
			<p class="contact-text">
				For inquiries, commissions, or simply to exchange pleasantries, do not
				hesitate to reach out through the following channels:
			</p>
			<div class="contact-info">
				<p>
					Electronic Mail: <a href="mailto:afkara@gmail.com">afkara@gmail.com</a
					>
				</p>
				<p>
					GitHub: <a href="https://github.com/afkaralp" target="_blank"
						>github.com/afkaralp</a
					>
				</p>
			</div>
		</div>
	</section>

	<Footer />
</div>

<style>
	.drop-cap {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--black);
		text-align: justify;
		margin-bottom: 20px;
		background: var(--yellowish);
	}

	.drop-cap::first-letter {
		float: left;
		font-family: 'UnifrakturMaguntia', serif;
		font-size: 4.5rem;
		line-height: 0.8;
		padding-right: 0.1em;
		padding-top: 0.1em;
		color: var(--black);
	}

	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		margin: 20px 0;
	}

	.columns > :global(*) {
		background: var(--yellowish);
	}

	.column {
		padding: 0 15px;
	}

	.column:first-child {
		border-right: 1px solid var(--border-color);
	}

	.column:last-child {
		border-right: none;
	}

	.contact-section {
		text-align: center;
		padding: 30px;
		border: 2px solid var(--border-color);
		margin: 30px 0;
		background: var(--yellowish);
	}

	.contact-header {
		font-family: 'UnifrakturMaguntia', serif;
		font-size: 2rem;
		color: var(--black);
		margin-bottom: 15px;
	}

	.contact-text {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1.1rem;
		color: var(--black);
		font-style: italic;
		margin-bottom: 20px;
		background: var(--yellowish);
	}

	.contact-info {
		font-family: 'Playfair Display', serif;
		font-size: 1rem;
		color: var(--black);
		background: var(--yellowish);
	}

	.contact-info a {
		color: var(--black);
		text-decoration: underline;
		background: var(--yellowish);
	}

	@media (max-width: 700px) {
		.columns {
			grid-template-columns: 1fr;
		}

		.column {
			border-right: none;
			border-bottom: 1px solid var(--border-color);
			padding-bottom: 20px;
			margin-bottom: 20px;
		}

		.column:last-child {
			border-bottom: none;
		}
	}

	.bookmark-contents {
		margin: 20px 0;
	}

	.view-more-btn {
		display: block;
		margin: 20px auto;
		padding: 8px 24px;
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1rem;
		font-style: italic;
		color: var(--black);
		background: var(--yellowish);
		border: none;
		cursor: pointer;
		letter-spacing: 0.05em;
	}

	.view-more-btn:hover {
		text-decoration: underline;
	}
</style>
