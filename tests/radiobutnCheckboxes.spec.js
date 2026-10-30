const{test,expect}=require('@playwright/test');

test.only('Radio button and checkbox', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const user =page.locator("#username");
    const signin=page.locator("#signInBtn");
    await user.fill("aashi");

    await page.locator("[class='radiotextsty']").last().click();
    await page.locator("#okayBtn").click();
    expect(page.locator("[class='radiotextsty']").last()).toBeChecked();
    console.log(await page.locator("[class='radiotextsty']").last().isChecked());

    await page.locator("#terms").click();
    expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").uncheck().isChecked).toBeFalsy();
    await signin.click();


});
