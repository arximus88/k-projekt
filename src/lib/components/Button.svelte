<script>
    export let size = "default";
    export let width = "fitcontent";
    export let variant = "primary";
    export let state = "default";
    export let disabled = false;
    export let icon = "";
  
    let classes = "";
  
    $: {
      classes = `${size} ${width} ${variant} ${state} ${icon ? "with-icon" : ""} ${disabled ? "disabled" : ""}`;
    }
  </script>
  
  <style>
    .button {
      color: var(--primary-basic);
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.15s ease-out;
      cursor: pointer;
      padding: 0.5rem 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      outline: none;
    }
  
    .small {
      font-size: 0.875rem;
    }
  
    .default {
      font-size: 1rem;
    }
  
    .large {
      font-size: 1.25rem;
    }
  
    .fitcontent {
      width: fit-content;
    }
  
    .block {
      width: 100%;
    }
  
    .primary {
      background: #3aafb9;
      box-shadow: 0px 0px 24px rgba(58, 175, 185, 0.32), inset 0px 0px 0px 1px rgba(247, 249, 249, 0.24);
      border-radius: 6px;
    }
  
    .outline {
      background: transparent;
      border: 1px solid #3aafb9;
      border-radius: 6px;
    }
  
    .hover:hover {
        background: #3AAFB9;
        box-shadow: 0px 0px 24px rgba(58, 175, 185, 0.64), inset 0px 0px 0px 3px rgba(247, 249, 249, 0.64);
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  </style>
  
<button
  class="button {classes}"
  on:click
  disabled="{disabled}"
>
  {#if icon}<span class="icon">{icon}</span>{/if}
  <slot />
</button>
  