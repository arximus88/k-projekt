<script>
	import Icon from '$lib/components/Icons.svelte';
	import Card from '$lib/components/Card_project.svelte';
	import { projects } from '$lib/projectsData.js';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects page" />
</svelte:head>

<h1>Projects</h1>
<section>
	<div class="projects">
		{#each projects as project}
			<Card
				folder="{project.folder}"
				title="{project.title}"
				description="{project.description}"
				clientName="{project.clientName}"
				tags="{project.tags}"
				year="{project.year}"
				disabled="{project.disabled}"
				visible="{project.visible}"
			/>
		{/each}
	</div>
</section>


<style>
	.projects {
		padding-top: 32px;
		padding-bottom: 128px;
		display: grid;
		gap: 24px;
    	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>