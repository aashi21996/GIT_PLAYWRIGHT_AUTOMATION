import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1280, height: 720 },
});

test('loads page with custom context options', async ({ page }) => {
        await page.goto('https://www.google.com/');
    await expect (page).toHaveTitle('Google');
});