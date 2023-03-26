<script>
	import Tag from '$lib/components/Tag.svelte';
	import Card from '$lib/components/Card_project.svelte';
	import Button from './Button.svelte';

</script>

<main>
	<h1>All Components</h1>
	<h3>Tags</h3>
	<div class="tags">
		<Tag tag="iOS" /><Tag tag="Android" /><Tag tag="Mobile" /><Tag tag="iOS" />
	</div>
	<h3>Buttons</h3>
	<Button size="small" width="fitcontent" variant="primary" icon="✓">Submit</Button>
	<Button size="default" width="block" variant="outline">Cancel</Button>
	<Button size="large" width="fitcontent" variant="primary" state="hover">Update</Button>
	<Button size="default" width="fitcontent" variant="primary" disabled={true}>Disabled</Button>

</main>

<style>
	.tags {
 		display: flex;
 		gap: 8px;
  }
</style>
