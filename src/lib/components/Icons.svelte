<script lang="ts">
	export let name = '';
	export let size = 24;
	export let color = '';
	export let viewBox = 24;
	export let viewBoxHeight = viewBox;
	export let viewBoxWidth = viewBox;
	import { onMount } from 'svelte';
	import { replaceFillColor } from './iconUtils';

	let iconPath = '';

	onMount(async () => {
		const response = await fetch(`/src/lib/icons/${name}.svg`);
		const svgString = await response.text();
		if (color) {
			iconPath = replaceFillColor(svgString, color);
		} else {
			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
			const pathElement = svgDoc.querySelector('path');
			if (pathElement) {
				pathElement.removeAttribute('fill');
				iconPath = pathElement.outerHTML;
			}
		}
	});
</script>

{#if iconPath}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 {viewBoxHeight} {viewBoxWidth}"
		width={size}
		height={size}
	>
		{@html iconPath}
	</svg>
{/if}

<style>
	
</style>