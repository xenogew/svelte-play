import adapter from '@sveltejs/adapter-vercel';
import { Config } from '@sveltejs/kit';
import preprocess from 'svelte-preprocess';

const config: Config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			external: [],
			split: false
		})
	}
};

export default config;
