const {test,expect}=require('@playwright/test');

test('Auto-waiting',async ({page})=>{
     
    await page.goto('https://demoqa.com/automation-practice-form');

    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    await page.locator('#firstName').fill('aashi',{force:true}); // due to force true it will not check actionability check
    await page.locator('#hobbies-checkbox-1').click();

});

test.only('Manual waiting',async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    test.setTimeout(60000);
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');
    await expect(page.locator('#submit')).toBeVisible({timeout:10000});

    await page.locator('#firstName').fill('aashi',{force:true}); // due to force true it will not check actionability check
    await page.locator('#hobbies-checkbox-1').click();

});