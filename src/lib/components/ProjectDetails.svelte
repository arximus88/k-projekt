<script>
	import Tag from '$lib/components/Tag.svelte';
	import { dragScroll } from '$lib/dragScroll';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	export let clientName = '';
	export let year = 1;
	export let platform = '';
	export let tags = ['s', 's', '2'];
    export let projectUrl = '';

	let tagsContainer;
	let hasOverflowingTags = false;

	onMount(() => {
		checkOverflowingTags();

		window.addEventListener('resize', checkOverflowingTags);
	});

	function checkOverflowingTags() {
		const containerWidth = tagsContainer.offsetWidth;
		const tagsWidth = tagsContainer.scrollWidth;

		if (tagsWidth > containerWidth) {
			hasOverflowingTags = true;
		} else {
			hasOverflowingTags = false;
		}
	}
</script>

<aside class="details">
	<h3>Details</h3>
	<div>
		<div class="detailsLine">
			<span class="text-caption">Client</span>
			<span>{clientName}</span>
		</div>
		<div class="detailsLine">
			<span class="text-caption">Year</span>
			<span>{year}</span>
		</div>
		<div class="detailsLine">
			<span class="text-caption">Platform</span>
			<span >{platform}</span>
		</div>
	</div>
    <div class="tags"
    bind:this={tagsContainer}
    class:has-overflowing-tags={hasOverflowingTags}
    use:dragScroll
>
    {#each tags as tag}
        <Tag {tag} />
    {/each}
</div>
    <Button projectUrl={projectUrl} size="default" width="block" variant="primary">Visit Website</Button>
</aside>

<style>
.details {
    display: flex;
    flex-direction: column;
    gap: 16px;

}
.detailsLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--slight-basic);
    padding: 12px 0px;
}

.tags {
		scrollbar-width: none;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 8px;
		overflow-x: auto;
		white-space: nowrap;
		position: relative;
		user-select: none;
	}
	/* Hide the scrollbars */
	.tags::-webkit-scrollbar {
		height: 0;
	}
	.tags.has-overflowing-tags {
		mask-size: cover;
		mask-repeat: no-repeat;
		mask-position: center;
		mask-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(0, 0, 0) 10%);
		-webkit-mask-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(0, 0, 0) 10%);
		-webkit-mask-size: cover;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
	}
</style>
