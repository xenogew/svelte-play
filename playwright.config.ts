import type { PlaywrightTestConfig } from '@playwright/test';
import { previewPort } from './vite.config';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: previewPort
	}
};

export default config;
