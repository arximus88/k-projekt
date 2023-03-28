<script>
    import Icons from "./Icons.svelte";
    export let platforms;
  </script>
  
  {#each platforms as platform}
    <span class="icon">
      {#if platform === 'web'}
         <Icons name="sun" size='16' />
      {:else if platform === 'ios'}
        <i class="fa fa-apple"></i>
      {:else if platform === 'android'}
        <i class="fa fa-android"></i>
      {:else if platform === 'windows'}
        <i class="fa fa-windows"></i>
      {:else if platform === 'macos'}
        <i class="fa fa-apple"></i>
      {:else}
        {platform}
      {/if}
    </span>
  {/each}
  
  <style>
    .icon {
      margin-right: 5px;
    }
  </style>
  