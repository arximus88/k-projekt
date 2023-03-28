import {loadEnv} from 'vite'
import {Client} from "@notionhq/client";
let env = loadEnv(
    'mock',
    process.cwd(),
    ''
)

if (!env.NOTION_SECRET) throw Error("NOTION_SECRET not found in .env")

console.log(env.NOTION_SECRET)

const notion = new Client({ auth: env.NOTION_SECRET });
// here code