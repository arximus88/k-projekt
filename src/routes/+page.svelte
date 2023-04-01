<script>
	import Button from '$lib/components/Button.svelte';
	let innerWidth = 0;
</script>

<svelte:head>
	<title>Borys's Place</title>
	<meta name="description" content="Borys's Place" />
</svelte:head>
<svelte:window bind:innerWidth />

<h1>Transforming Your Digital Experience</h1>
<section class="page-container">
	<p class="text-secondary">
		My name is Borys, a UI/UX designer with over 11 years of experience in the industry.
	</p>
	<p class="text-secondary">
		I bring a wealth of knowledge from working with companies such as Chegg and Upwork, and I have
		recently spent 4+ years as a Senior Product Designer at Virtually Human Studios, where I led the
		design process for ZED RUN their flagship product and Human Park game.
	</p>
	<p class="text-secondary">
		With my skills and expertise, I can help bring your digital vision to life. Check out my
		LinkedIn page to see some of my previous work and let's create something awesome together!
	</p>

	{#if innerWidth < 576}
		<Button
			projectUrl="https://www.linkedin.com/in/boryskharchenko/"
			size="default"
			width="block"
			variant="primary">Connect me on Linkedin</Button
		>
	{/if}
	{#if innerWidth >= 576}
		<Button
			projectUrl="https://www.linkedin.com/in/boryskharchenko/"
			size="default"
			width="fitcontent"
			variant="primary">Connect me on Linkedin</Button
		>
	{/if}
</section>

<style>
</style>
