
<script lang="ts">
	export let tag = '';
</script>

<div class="tag tag-text">{tag}</div>

<style>
    .tag-text {
    margin: 0px;
	font-size: 14px;
	font-weight: normal;
    font-family: var(--font-mono);
	color: var(--caption-basic);
    }

    .tag{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 8px;
    gap: 8px;
    border: 1px solid var(--slight-basic);
    border-radius: 4px;
    width: fit-content;
    cursor: help;
    }
    .tag:hover {
        border: 1px solid var(--disabled-basic);
    }
    .tag-text:hover {
        color: var(--primary-basic);
    }
</style>