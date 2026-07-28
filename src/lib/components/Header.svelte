<script lang="ts">
	import { YEAR_ROMAN } from '$lib/config';
</script>

<header class="masthead">
	<a href="/" class="masthead-link">
		<h1 class="masthead-title">The Afkara Times</h1>
	</a>
	<p class="masthead-subtitle">Purveyor of Fine Computery Activities</p>
	<div class="date-line">
		<span>Est. {YEAR_ROMAN}</span>
		<span>Volume I, Issue I</span>
		<span>Price: $0.00</span>
	</div>
</header>

<nav>
	<a href="/#about">About</a>
	<a href="/#projects">Projects</a>
	<a href="/blog">Blog</a>
	<a href="/#contact">Contact</a>
	<a href="/#bookmarks">Bookmarks</a>
</nav>

<style>
	.masthead {
		text-align: center;
		padding: 20px 0;
		border-bottom: 3px double var(--border-color);
		margin-bottom: 20px;
	}

	.masthead-title {
		font-family: 'UnifrakturMaguntia', 'Old English Text MT', serif;
		font-size: 4rem;
		color: var(--black);
		letter-spacing: 0.05em;
		text-transform: none;
		margin-bottom: 5px;
	}

	.masthead-subtitle {
		font-family: 'Playfair Display', Georgia, serif;
		font-style: italic;
		font-size: 1.1rem;
		color: var(--dark-yellowish);
		letter-spacing: 0.1em;
		text-transform: none;
	}

	.date-line {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 0.9rem;
		color: var(--black);
		margin-top: 10px;
		padding-top: 10px;
		border-top: 1px solid var(--border-color);
		display: flex;
		justify-content: space-between;
	}

	.masthead-link {
		text-decoration: none;
		color: inherit;
		background: transparent;
	}

	.masthead-link:hover .masthead-title {
		color: var(--dark-yellowish);
	}

	nav {
		text-align: center;
		padding: 15px 0;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		margin-bottom: 25px;
		background: var(--yellowish);
	}

	nav a {
		font-family: 'Playfair Display', serif;
		font-size: 1rem;
		color: var(--black);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin: 0 20px;
		padding: 5px 0;
		border-bottom: 1px solid transparent;
		transition: border-color 0.3s;
		cursor: pointer;
		background: transparent;
	}

	nav a:hover {
		border-bottom: 1px solid var(--black);
	}

	@media (max-width: 700px) {
		.masthead-title {
			font-size: 2.5rem;
		}

		nav a {
			display: block;
			margin: 10px 0;
		}

		.date-line {
			flex-direction: column;
			text-align: center;
			gap: 5px;
		}
	}
</style>
