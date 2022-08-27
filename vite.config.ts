export const serverPort: number = 5173;
export const previewPort: number = 4173;
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: serverPort
	}
});
