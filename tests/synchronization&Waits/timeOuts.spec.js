const {test,expect}=require('@playwright/test');

test('Default Timeout', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Set default timeout to 5 seconds
    page.setDefaultTimeout(5000);

    const firstName = page.locator('#firstName');

    await firstName.click();

    await firstName.fill('Aashi');

});

test('Action Timeout', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = page.locator('#firstName');

    // Wait maximum 5 seconds for click action
    await firstName.click({ timeout: 5000 });

    // Wait maximum 3 seconds for fill action
    await firstName.fill('Aashi', { timeout: 3000 });

});

test('Navigation Timeout', async ({ page }) => {

    // Set navigation timeout to 10 seconds
    page.setDefaultNavigationTimeout(10000);

    await page.goto('https://demoqa.com/automation-practice-form');

    console.log('Page navigation completed');

});

test('Assertion Timeout', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = page.locator('#firstName');

    await expect(firstName).toBeVisible({
        timeout: 10000
    });

});

test('Test Timeout', async ({ page }) => {

    // Set test timeout to 60 seconds
    test.setTimeout(60000);

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill('Aashi');

    await page.locator('#lastName').fill('Kankane');

    await expect(page.locator('#firstName'))
        .toHaveValue('Aashi');

});