<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.onReady(() => {
			game.onload();
		});
	});
</script>

<svelte:head>
	<title>DEZ Under Construction</title>
	<meta name="description" content="DEZ Under Construction - Clumpsy Bird variation" />
</svelte:head>

<main>
	<!-- Canvas placeholder -->
	<div id="screen" />
	<!-- url('/icons/{name}.svg'); -->
	<!-- melonJS Library -->
	<script type="text/javascript" src="/dez/js/melonJS-min.js"></script>
	<script type="text/javascript" src="/dez/build/clumsy-min.js"></script>
</main>

<style>
	main {
		background-color: #1d2722;
		color: #bfc784;
		max-width: 100%;
		padding: 0;
    margin: 0;
		/* Allow mouse dragging. */
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		-webkit-user-select: none;
		user-select: none;

		/* disable touch panning/zooming */
		-ms-touch-action: none;
		touch-action: none;

		/* Allow canvas to hit the edges of the browser viewport. */
		margin: 0;
	}

	:global(#screen canvas) {
		margin: auto;
		/* Hide the gap for font descenders. */
		display: block;

		/* disable scaling interpolation */
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: optimize-contrast;
		-ms-interpolation-mode: nearest-neighbor;
	}

	:global(#share) {
		margin: 10px auto;
		text-align: center;
	}

	:global(#share .fb-share-button iframe) {
		margin-top: -4px;
	}

	@font-face {
		font-family: 'gamefont';
		src: url('/dez/data/css/gamefont.eot');
		src: url('/dez/data/css/gamefont.eot?#iefix') format('embedded-opentype'),
			url('/dez/data/css/gamefont.woff') format('woff'),
			url('data/css/gamefont.ttf') format('truetype'),
			url('/dez/data/css/gamefont.svg#gamefont') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	:global(.google) {
		position: absolute;
		left: 23%;
	}
</style>
