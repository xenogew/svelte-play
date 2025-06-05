import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'static/.well-known/appspecific/com.chrome.devtools.json',
			],
		},
	},
});
