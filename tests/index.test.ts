import { expect, test } from '@playwright/test';

test(`index is expected to render header section`, async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('span#app-title')).toBe('Password Generator');
});

test(`index is expected found labels & controllers`, async ({ page }) => {
	await page.goto('/');
	// labels (of switches)
	expect(await page.textContent('label[for=symbols]')).toBe('Include Symbols');
	expect(await page.textContent('label[for=numbers]')).toBe('Include Numbers');
	expect(await page.textContent('label[for=lowers]')).toBe('Include Lowercases');
	expect(await page.textContent('label[for=uppers]')).toBe('Include Uppercases');
	expect(await page.textContent('label[for=similar]')).toBe('Exclude Similar');
	// toggle switches controller
	expect(await page.isChecked('input#symbols')).toBeTruthy();
	expect(await page.isChecked('input#numbers')).toBeTruthy();
	expect(await page.isChecked('input#lowers')).toBeTruthy();
	expect(await page.isChecked('input#uppers')).toBeTruthy();
	expect(await page.isChecked('input#similar')).toBeFalsy();

	// label (of password length)
	expect(await page.textContent('span#pw-length')).toBe('Password Length');
	// password selected value
	expect(await page.inputValue('input[name=pwdLength]:checked')).toEqual('16');

	// generate button
	expect(await page.textContent('button#generate')).toBe('Generate');
	// copy button
	expect(await page.textContent('button#copy-it')).toContain('Copy it');

	// generated label
	expect(await page.textContent('label[for=generated]')).toBe('Generated');
});

test(`index is expected to render footer section`, async ({ page }) => {
	await page.goto('/');
	// credit
	expect(await page.textContent('h3#credit-label')).toBe('Credit');
	expect(await page.textContent('a#credit-icon-01')).toBe(
		'Password icons created by Freepik - Flaticon'
	);
	expect(await page.getAttribute('a#credit-icon-01', 'href')).toBe(
		'https://www.flaticon.com/free-icons/password'
	);

	// navigate
	expect(await page.textContent('h3#navigate-label')).toBe('Navigate');
	expect(await page.textContent('a#about')).toBe('About');
	expect(await page.getAttribute('a#about', 'href')).toBe('/about');

	// copyright
	expect(await page.textContent('p#copyright')).toBe('© Copyright 2021. All Rights Reserved.');
	// github
	expect(await page.isVisible('div#owner-section > a > svg'));
	// buy me a coffee
	expect(await page.isVisible('div.bmc-btn-container > a > svg'));
	expect(await page.textContent('div.bmc-btn-container > a > span')).toBe('Buy me a coffee');
});
