<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="The Afkara Times" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

{@render children()}

<style>
	/*
	 * Paper texture credit:
	 * Ivory Off White Paper Texture
	 * https://www.photos-public-domain.com/2012/05/24/ivory-off-white-paper-texture/
	 */

	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=IM+Fell+English:ital@0;1&family=UnifrakturMaguntia&display=swap');

	:global(:root) {
		--yellowish: #f5e6c8;
		--dark-yellowish: #625d48;
		--black: #2a2218;
		--white: #eee;
		--sepia: #d4c4a8;
		--border-color: #2a2218;
		--paper-texture: url('$lib/assets/ivory-off-white-paper-texture.jpg');
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		background: var(--yellowish);
		min-height: 100vh;
	}

	:global(body) {
		position: relative;
	}

	:global(body::before) {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: var(--paper-texture);
		background-repeat: repeat;
		background-size: auto;
		opacity: 0.3;
		pointer-events: none;
		z-index: 1000;
		mix-blend-mode: multiply;
	}

	:global(.page) {
		max-width: 900px;
		margin: 0 auto;
		padding: 40px 20px;
		background: var(--yellowish);
	}

	:global(.divider) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 25px 0;
	}

	:global(.divider::before),
	:global(.divider::after) {
		content: '';
		flex: 1;
		height: 1px;
		background: var(--border-color);
	}

	:global(.divider-ornament) {
		padding: 0 15px;
		font-family: 'Playfair Display', serif;
		font-size: 1.5rem;
		color: var(--black);
	}

	:global(.double-line) {
		border: none;
		border-top: 3px double var(--border-color);
		margin: 20px 0;
	}

	:global(.single-line) {
		border: none;
		border-top: 1px solid var(--border-color);
		margin: 15px 0;
	}

	:global(.ribbon) {
		font-family: 'Playfair Display', serif;
		font-size: 28px;
		font-weight: bold;
		--s: 1.8em;
		--d: 0.8em;
		--c: 0.8em;
		color: var(--white);
		margin: 20px auto;
		padding: 0 calc(var(--s) + 0.5em) var(--d);
		line-height: 1.8;
		background:
			conic-gradient(
					at left var(--s) bottom var(--d),
					#0000 25%,
					#0008 0 37.5%,
					#0004 0
				)
				0 /50% 100% no-repeat,
			conic-gradient(
					at right var(--s) bottom var(--d),
					#0004 62.5%,
					#0008 0 75%,
					#0000 0
				)
				100%/50% 100% no-repeat;
		clip-path: polygon(
			0 var(--d),
			var(--s) var(--d),
			var(--s) 0,
			calc(100% - var(--s)) 0,
			calc(100% - var(--s)) var(--d),
			100% var(--d),
			calc(100% - var(--c)) calc(50% + var(--d) / 2),
			100% 100%,
			calc(100% - var(--s) - var(--d)) 100%,
			calc(100% - var(--s) - var(--d)) calc(100% - var(--d)),
			calc(var(--s) + var(--d)) calc(100% - var(--d)),
			calc(var(--s) + var(--d)) 100%,
			0 100%,
			var(--c) calc(50% + var(--d) / 2)
		);
		background-color: var(--dark-yellowish);
		width: fit-content;
	}

	:global(.headline) {
		font-family: 'Playfair Display', serif;
		font-weight: 900;
		font-size: 2.5rem;
		color: var(--black);
		text-align: center;
		margin: 20px 0;
		line-height: 1.1;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	:global(.subheadline) {
		font-family: 'Playfair Display', serif;
		font-weight: 400;
		font-style: italic;
		font-size: 1.3rem;
		color: var(--black);
		text-align: center;
		margin-bottom: 25px;
	}

	:global(.section-header) {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--black);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-align: center;
		margin: 30px 0 20px;
		padding: 10px 0;
		border-top: 2px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		background: var(--yellowish);
	}

	:global(.article) {
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--black);
		text-align: justify;
		margin-bottom: 20px;
		background: var(--yellowish);
	}

	:global(.back-link) {
		font-family: 'Playfair Display', serif;
		font-size: 1rem;
		color: var(--black);
		text-decoration: none;
		border-bottom: 1px solid var(--black);
		background: transparent;
	}

	:global(.back-link:hover) {
		color: var(--dark-yellowish);
		border-color: var(--dark-yellowish);
	}

	@media (max-width: 700px) {
		:global(.headline) {
			font-size: 1.8rem;
		}
	}
</style>
