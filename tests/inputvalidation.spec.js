const{test,expect}=require('@playwright/test');

test('input validation', async ({page}) =>{
    await page.goto("https://parabank.parasoft.com/parabank/lookup.htm");
    await page.locator("[name='username']").fill("ak");
    const user =await page.locator("[name='username']").inputValue();
    console.log(user);
    expect(user).toBe("ak");
});
