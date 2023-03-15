<!-- <script lang="ts">
  import { onMount } from "svelte";
  import { replaceFillColor } from "./iconUtils";

  export let name = "";
  export let size = "24";
  export let color = "currentColor";
  export let viewBoxHeight = 24;
  export let viewBoxWidth = viewBoxHeight;

  /** @type {string | undefined} */
  let iconPath = "";

  onMount(async () => {
    const response = await fetch(`/src/lib/icons/${name}.svg`);
    const originalSvg = await response.text();
    iconPath = replaceFillColor(originalSvg, color);
  });
</script>

{#if iconPath}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 {viewBoxHeight} {viewBoxWidth}"
    style="height: {size}px; width: {size}px;"
  >
    <g>
      {@html iconPath}
    </g>
  </svg>
{/if} -->

<script lang="ts">
  export let name = "";
  export let size = 24;
  export let color = "";
  import { onMount } from "svelte";

  let iconPath = "";

  onMount(async () => {
    const response = await fetch(`/src/lib/icons/${name}.svg`);
    const svgString = await response.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const pathElement = svgDoc.querySelector("path");
    if (pathElement) {
      pathElement.removeAttribute("fill");
      iconPath = pathElement.outerHTML;
    }
  });
</script>

<style>
  path {
    fill: var(fill, currentColor);
  }
</style>

{#if iconPath}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="{size}"
    height="{size}"
    style="fill: {color};"
  >
    {@html iconPath}
  </svg>
{/if}

