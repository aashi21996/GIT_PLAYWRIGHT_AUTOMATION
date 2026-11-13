const {test,expect}=require('@playwright/test');

test('Auto-Retrying assertions',async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    const radiobutn= await page.locator("[value='Male']");
    await radiobutn.click();
    await expect(radiobutn).toBeChecked();

    const checkbox= await page.locator ('#hobbies-checkbox-1');
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    const attribute = await page.locator('#firstName')
    await expect.soft(attribute).toHaveAttribute('weplaceholder','First Name');


    const titlt=await page.locator('.text-center');
    await expect(titlt).toHaveText('Practice Form');
    await expect(titlt).toContainText('Practice');

});

test.only('Non-Retrying assertions',async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    const visibleone= await page.locator('#firstName').isVisible();
    expect(visibleone).toBeTruthy();

    await page.locator('#firstName').fill('aashi');
    const input= await page.locator('#firstName').inputValue();

    expect(input).toBeTruthy();
    expect(input).toBeDefined();

    expect(input).toContain('aa');
    expect(input).toBe('aashi');

});
