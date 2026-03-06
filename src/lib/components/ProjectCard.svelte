<script lang="ts">
	import { type Project, projectUrl } from '$lib/config';
	import { fetchGithubStars } from '$lib/github';

	let { project }: { project: Project } = $props();

	let url = $derived(projectUrl(project));

	let stars = $state<number | null>(null);
	let loading = $state(true);

	$effect(() => {
		fetchGithubStars(project.owner, project.repo).then((count) => {
			stars = count;
			loading = false;
		});
	});
</script>

<div class="project-card">
	<h4 class="project-title">
		<a href={url} target="_blank">{project.name}</a>
	</h4>
	<p class="project-meta">
		<span class="project-language">{project.language}</span>
		{#if loading}
			<span class="project-stars"> &middot; &#9733; ...</span>
		{:else if stars !== null}
			<span class="project-stars"> &middot; &#9733; {stars}</span>
		{/if}
	</p>
	<p class="project-description">{project.description}</p>
</div>

<style>
	.project-card {
		border: 1px solid var(--border-color);
		padding: 15px;
		margin-bottom: 20px;
		background: var(--yellowish);
	}

	.project-title {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		font-size: 1.2rem;
		color: var(--black);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 10px;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 5px;
		background: var(--yellowish);
	}

	.project-description {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1rem;
		color: var(--black);
		line-height: 1.6;
		background: var(--yellowish);
	}

	.project-meta {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 0.9rem;
		color: var(--dark-yellowish);
		margin-bottom: 10px;
		background: var(--yellowish);
	}

	.project-language {
		font-style: italic;
	}

	.project-stars {
		color: var(--black);
	}

	.project-title a {
		color: var(--black);
		text-decoration: none;
		background: var(--yellowish);
	}

	.project-title a:hover {
		text-decoration: underline;
	}
</style>
