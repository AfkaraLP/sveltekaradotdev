<script lang="ts">
	import { YEAR_ROMAN } from '$lib/config';
</script>

<p class="ornament">&mdash; &#10047; &mdash;</p>
<footer class="footer">
	<p>&copy; {YEAR_ROMAN} The Afkara Times &mdash; All Rights Reserved</p>
</footer>

<style>
	.footer {
		text-align: center;
		padding: 20px 0;
		margin-top: 40px;
		border-top: 3px double var(--border-color);
		font-family: 'IM Fell English', Georgia, serif;
		font-size: 0.9rem;
		color: var(--dark-yellowish);
		background: var(--yellowish);
	}

	.ornament {
		font-family: 'Playfair Display', serif;
		font-size: 1.5rem;
		text-align: center;
		margin: 15px 0;
		color: var(--black);
	}
</style>
