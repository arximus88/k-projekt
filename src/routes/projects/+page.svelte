<script>
	import Icon from '$lib/components/Icons.svelte';
	import Card from '$lib/components/Card_project.svelte';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects page" />
</svelte:head>

<h1>Projects</h1>
<section>
	<div class="projects">
		<Card /><Card /><Card />
	</div>
</section>


<style>
	.projects {
		display: grid;
		gap: 24px;
    	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>