import { expect, test } from '@playwright/test';

test(`index page has expected title in <span> is 'Password Generator'`, async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('span')).toBe('Password Generator');
});
