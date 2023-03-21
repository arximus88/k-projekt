
<script lang="ts">
	export let tag = '';
</script>

<div class="tag">{tag}</div>

<style>
    .tag{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 8px;
    gap: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    width: fit-content;
    cursor: help;
    }
    .tag:hover {
        border: 1px solid rgba(255, 255, 255, 0.24);
    }
</style>