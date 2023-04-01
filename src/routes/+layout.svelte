<script>
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import VideoBackground from '$lib/components/Video-background.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<VideoBackground />
	<main>
		<slot />
	</main>

	<Navbar />
	<footer>
		<p>v11 isit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 32px;
		padding-bottom: 128px;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
