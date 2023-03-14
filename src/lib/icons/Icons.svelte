<script>
    export let name = "";
    import { onMount } from "svelte";
    /** @type {string | undefined} */
    let iconPath;
  
    onMount(() => {
      import(`./icons/${name}.svg`).then((icon) => {
        iconPath = icon.default;
      });
    });
  </script>
  
  {#if iconPath}
    <img src="{iconPath}" alt="{name}" />
  {/if}