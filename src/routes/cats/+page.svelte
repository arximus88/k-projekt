<!-- src/routes/Cats.svelte -->
<script>
	import Button from '$lib/components/Button.svelte';
	let innerWidth = 0;
</script>

<svelte:head>
	<title>Miscelanious</title>
	<meta name="description" content="Cat's Playground" />
</svelte:head>
<h1>Cats</h1>
<svelte:window bind:innerWidth />
<section class="page-container">
	<p class="text-secondary">Welcome to the my cats page!</p>
	<div class="kitties">
		<div class="kitties-images">
      <img src="images/cats/ball.svg" alt="Ball" />
			<img src="images/cats/kitty-bulka.svg" alt="Bulka cat" />
			<img src="images/cats/kitty-kava.svg" alt="Kava cat" />
      <img src="images/cats/kitty-mo.svg" alt="Mo cat" />
      <img src="images/cats/kitty-zuki.svg" alt="Zuki cat" />
      <img src="images/cats/kitty-ceks.svg" alt="Ceks cat" />
		</div>

		{#if innerWidth < 576}
			<Button
				projectUrl="https://www.instagram.com/psy_koteiky/"
				size="default"
				width="block"
				variant="primary">Follow on Instagram</Button
			>
		{/if}
		{#if innerWidth >= 576}
			<Button
				projectUrl="https://www.instagram.com/psy_koteiky/"
				size="default"
				width="fitcontent"
				variant="primary">Follow on Instagram</Button
			>
		{/if}
	</div>
</section>

<style>
	/* Add your component-specific styles here, if needed */
</style>
