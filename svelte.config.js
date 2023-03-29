import adapter from '@sveltejs/adapter-node';
import alias from '@rollup/plugin-alias';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocess({
    typescript: {
      tsconfigFile: './tsconfig.json',
    },
  }),
};

export default config;
