const {test,expect}=require('@playwright/test');

test('Built-in Assertion',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('#login-button')).toBeVisible();

    const searchbox= await page.locator('#user-name');
    await expect(searchbox).toBeEnabled();
});