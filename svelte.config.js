import adapter from '@sveltejs/adapter-auto';
import alias from '@rollup/plugin-alias';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
};

export default config;
