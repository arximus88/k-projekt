<!-- App.svelte -->
<script>
    import Button from '$lib/components/Button.svelte';
	import { Client } from '@notionhq/client';
	import { loadEnv } from 'vite';
	let env = loadEnv('mock', process.cwd(), '');
	if (!env.NOTION_SECRET) throw Error('NOTION_SECRET not found in .env');

	// console.log(env.NOTION_SECRET)

	const notion = new Client({ auth: env.NOTION_SECRET });
    
	let notionData = '';

	async function getData() {
		const response = await fetch('https://api.notion.com/v1/databases/509b5015095349bdb37e231ecc5df787/query', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Notion-Version': '2021-08-16',
				Authorization: `Bearer ${env.NOTION_SECRET}`

			},
			body: JSON.stringify({
				filter: {
					property: 'Status',
					select: {
						equals: 'Done'
					}
				}
			})
		});

		notionData = await response.json();
	}
</script>

<svelte:head>
	<title>API Script Tester</title>
	<meta name="description" content="Miscellaneous" />
</svelte:head>

<main>
	<h1>Notion API Test Page</h1>
	<button on:click={getData}>Get Notion Data</button>
	<!-- <Button on:click={getData} size="default" width="block" variant="primary">Get Notion Data</Button> -->
	<pre>{JSON.stringify(notionData, null, 2)}</pre>
</main>

<style>


	pre {
		margin-top: 24px;
		max-width: 600px;
		padding: 16px;
		font-size: 14px;
		line-height: 1.5;
		color: #333;
		background-color: #f9f9f9;
		border: 1px solid #ccc;
		border-radius: 4px;
		overflow-x: auto;
	}
</style>
