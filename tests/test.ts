import { expect, test } from '@playwright/test';

test(`index is expected title in <span> is 'Password Generator'`, async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('span#app-title')).toBe('Password Generator');
});

test(`index is expected checkboxes labelled with <span> and other switches with <label>`, async ({
	page
}) => {
	await page.goto('/');
	expect(await page.textContent('span#pw-length')).toBe('Password Length');
	expect(await page.textContent('label[for=symbols]')).toBe('Include Symbols');
	expect(await page.textContent('label[for=numbers]')).toBe('Include Numbers');
	expect(await page.textContent('label[for=lowers]')).toBe('Include Lowercases');
	expect(await page.textContent('label[for=uppers]')).toBe('Include Uppercases');
	expect(await page.textContent('label[for=similar]')).toBe('Exclude Similar');
	expect(await page.textContent('label[for=ambiguous]')).toBe('Exclude Ambiguous');
});
