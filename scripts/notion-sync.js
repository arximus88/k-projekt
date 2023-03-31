import { Client } from '@notionhq/client';
import { writeFile } from 'fs/promises';
import { loadEnv } from 'vite';
import fs from 'fs'; // Node.js file system module
import path from 'path'; // Node.js path module
let env = loadEnv('mock', process.cwd(), '');
if (!env.NOTION_SECRET) throw Error('NOTION_SECRET not found in .env');

// console.log(env.NOTION_SECRET)

const notion = new Client({ auth: env.NOTION_SECRET });

// Fetch the database data
async function getDatabase(databaseId) {
	const response = await notion.databases.retrieve({ database_id: databaseId });
	return response;
}

// Get the projects from Notion and transform the data
async function getProjects() {
	const database = await getDatabase('509b5015095349bdb37e231ecc5df787');
	const response = await notion.databases.query({
		database_id: '509b5015095349bdb37e231ecc5df787'
	});
	const projects = response.results.map((page) => {
		return {
			id: page.id,
			title: page.properties['project-name'].title[0]?.text.content || '',
			clientName: page.properties['client-name']?.rich_text?.[0]?.text.content || '',
			clientUrl: page.properties['client-url'].url || '',
			projectUrl: page.properties['project-url'].url || '',
			androidUrl: page.properties['android-url'].url || '',
			iosUrl: page.properties['ios-url'].url || '',
			year: page.properties.year.number || '',
			description: page.properties.description.rich_text[0]?.text.content || '',
			order: page.properties.order.number || '',
			folder: page.properties.folder.rich_text[0]?.text.content || '',
			tags: page.properties.tags.multi_select.map((tag) => tag.name) || [],
			platforms: page.properties.platforms.multi_select.map((platform) => platform.name) || [],
			visible: page.properties.visible.checkbox || false,
			disabled: page.properties.disabled.checkbox || false
		};
	});
	return projects;
}

async function saveProjectsToFile() {
	const projects = await getProjects();
	const reversedProjects = projects.reverse();
	const filePath = path.join('.', 'src', 'lib', 'projects-table.json');
	const backupFilePath = path.join('.', 'src', 'lib', 'projects-table.json.bkp');
	try {
		// Rename the existing file to a backup file, if it exists
		await fs.promises.access(filePath);
		await fs.promises.rename(filePath, backupFilePath);
		console.log(`Existing file ${filePath} renamed to ${backupFilePath}`);
	} catch (err) {
		if (err.code !== 'ENOENT') {
			console.error(`Error renaming existing file ${filePath}:`, err);
		}
	}
	await writeFile(filePath, JSON.stringify(reversedProjects, null, 2));
	console.log(`New projects saved to file ${filePath}!`);
}

// Run the script
saveProjectsToFile();
