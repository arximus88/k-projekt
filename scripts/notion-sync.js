import { Client } from "@notionhq/client";
import { writeFile } from "fs/promises";

// Initialize a new Notion client
const notion = new Client({ auth: 'secret_29roOcjKyT3wmqutEmSmMzcWR4D7x4eQQoL51ijPCpb' });

// Fetch the database data
async function getDatabase(databaseId) {
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
}

// Get the projects from Notion and transform the data
async function getProjects() {
  const database = await getDatabase('509b5015095349bdb37e231ecc5df787');
  const response = await notion.databases.query({ database_id: '509b5015095349bdb37e231ecc5df787' });
  const projects = response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties["project-name"].title[0]?.text.content || "",
      clientName: page.properties["client-name"]?.rich_text?.[0]?.text.content || "",
      clientUrl: page.properties["client-url"].url || "",
      projectUrl: page.properties["project-url"].url || "",
      androidUrl: page.properties["android-url"].url || "",
      iosUrl: page.properties["ios-url"].url || "",
      year: page.properties.year.number || "",
      description: page.properties.description.rich_text[0]?.text.content || "",
      order: page.properties.order.number || "",
      folder: page.properties.folder.rich_text[0]?.text.content || "",
      tags: page.properties.tags.multi_select.map(tag => tag.name) || [],
      platforms: page.properties.platforms.multi_select.map(platform => platform.name) || [],
    };
  });
  return projects;
}

// Save the projects to a file
async function saveProjectsToFile() {
  const projects = await getProjects();
  const reversedProjects = projects.reverse();
  await writeFile("../src/lib/projects-table.json", JSON.stringify(reversedProjects, null, 2));
  console.log("Projects saved to file!");
}

// Run the script
saveProjectsToFile();