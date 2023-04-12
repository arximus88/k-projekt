import {error} from "@sveltejs/kit";

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    if (params.slug) {
        const deta = Deta();
        const projects_db = deta.Base('projects');
        const projects_details_db = deta.Base('projects-details');

        const project = await projects_details_db.get(params.slug);
        if (project) return project;
        else  throw error(404, 'Not found');
    }

    throw error(404, 'Not found');
}