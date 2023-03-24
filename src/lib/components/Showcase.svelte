<script>
	import Tag from '$lib/components/Tag.svelte';
	import Card from '$lib/components/Card_project.svelte';
</script>

<main>
	<h1>All Components</h1>
	<h3>Tags</h3>
	<div class="tags">
		<Tag tag="iOS" /><Tag tag="Android" /><Tag tag="Mobile" /><Tag tag="iOS" />
	</div>
</main>

<style>
	.tags {
 		display: flex;
 		gap: 8px;
  }
</style>
