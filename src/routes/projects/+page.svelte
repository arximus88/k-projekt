<script>
	import Icon from '$lib/components/Icons.svelte';
	let count = 0.1 + 0.2;

	function incrementCount() {
		count += 1;
	}
	$: if (count % 10 === 1 && count > 30) {
		alert('count is dangerously high!');
	}
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects page" />
</svelte:head>

<h1>Projects</h1>
<section>
	<p class="text-secondary">Some projects here</p>
</section>
