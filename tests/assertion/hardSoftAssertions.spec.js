const {test,expect}=require('@playwright/test');

test('Hard Assertion',async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    await expect(page).toHaveTitle('STORE');

    await expect(page.locator('.navbar-brand')).toBeVisible();
    
});

test.only('Soft Assertion',async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');

    await expect.soft(page).toHaveTitle('STORE123');

    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    
});