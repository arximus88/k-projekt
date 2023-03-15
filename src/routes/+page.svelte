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
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1>Transforming Your Digital Experience {count} {count % 10 === 1 ? 'time' : 'times'}</h1>
<Icon name="user-edit" />
<p>
	My name is Borys, a UI/UX designer with over 11 years of experience in the industry. I bring a
	wealth of knowledge from working with companies such as Chegg and Upwork, and I have recently
	spent 4+ years as a Senior Product Designer at Virtually Human Studios, where I led the design
	process for ZED RUN their flagship product and Human Park game. With my skills and expertise, I
	can help bring your digital vision to life. Check out my LinkedIn page to see some of my previous
	work and let's create something awesome together!"
</p>
<button on:click={incrementCount}> Do not click HERE </button>
