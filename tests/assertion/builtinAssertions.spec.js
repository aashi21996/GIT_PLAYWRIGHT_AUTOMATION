const {test,expect}=require('@playwright/test');

test('Built-in Assertion',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page.locator('#login-button')).toBeVisible();

    const searchbox= await page.locator('#user-name');
    await expect(searchbox).toBeEnabled();

});

test('Built-in Assertion 2',async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');
    
    const radiobutn= await page.locator("[value='Male']");
    await radiobutn.click();
    await expect(radiobutn).toBeChecked();

    const checkbox= await page.locator ('#hobbies-checkbox-1');
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    const attribute = await page.locator('#firstName')
    await expect(attribute).toHaveAttribute('placeholder','First Name');


    const titlt=await page.locator('.text-center');
    await expect(titlt).toHaveText('Practice Form');
    await expect(titlt).toContainText('Practice');

    const lastname = await page.locator('#lastName');
    await lastname.fill('kankane');
    await expect(lastname).toHaveValue('kankane');

});

test.only('Built-in Assertion 3',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropdown= await page.locator('select[id="country"] option');
    await expect(dropdown).toHaveCount(10);
});