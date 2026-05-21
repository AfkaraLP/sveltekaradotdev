<script lang="ts">
	import { type Bookmark } from '$lib/config';

	let { bookmark }: { bookmark: Bookmark } = $props();
</script>

<div class="bookmark-card">
	<div class="bookmark-card-header">
		<h4 class="bookmark-title">
			<a href={bookmark.url} target="_blank">{bookmark.title}</a>
		</h4>
		<div class="bookmark-tags">
			{#each bookmark.tags as tag}
				<span class="bookmark-tag">{tag}</span>
			{/each}
		</div>
	</div>
	<p class="bookmark-description">{bookmark.description}</p>
</div>

<style>
	.bookmark-card {
		border: 1px solid var(--border-color);
		padding: 15px;
		margin-bottom: 15px;
		background: var(--yellowish);
	}

	.bookmark-card-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 10px;
		margin-bottom: 8px;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 8px;
	}

	.bookmark-title {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--black);
		letter-spacing: 0.03em;
		background: var(--yellowish);
	}

	.bookmark-title a {
		color: var(--black);
		text-decoration: none;
		background: var(--yellowish);
	}

	.bookmark-title a:hover {
		text-decoration: underline;
	}

	.bookmark-tags {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}

	.bookmark-tag {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 0.8rem;
		font-style: italic;
		color: var(--dark-yellowish);
		border: 1px solid var(--border-color);
		padding: 1px 6px;
		background: var(--yellowish);
	}

	.bookmark-description {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1rem;
		color: var(--black);
		line-height: 1.6;
		background: var(--yellowish);
	}
</style>
