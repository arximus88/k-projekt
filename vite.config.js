import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';

export default defineConfig({
	plugins: [
		sveltekit(),
		alias({
			entries: [
				{
					find: '$lib',
					replacement: './src/lib',
				},
			],
		}),
	],
	resolve: {
		alias: {
			$lib: '/src/lib',
			photoswipe: 'photoswipe/dist/photoswipe-lightbox.esm.js',
		},
	},
});

  