import { test as base } from '@playwright/test';

export const test = base.extend({
    homepage: async ({ page }, use) => {
        await page.goto('https://www.google.com/');
        await use(page);
    },
});