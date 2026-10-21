const{test,expect}=require('@playwright/test');

test.only('css locator',async ({page})=>{
    await page.goto("https://www.amazon.in/");
    console.log(await page.title());

    await page.locator("#nav-logo-sprites");
    await page.locator("div#nav-fill-search");

    await page.locator("[value='Go']").click();
    //await page.locator("[name='field-keywords']").fill("laptop");
    await page.fill("[name='field-keywords']","laptop");

    await page.locator("[class*='icp-nav-flag']");

});


test('css selector imp', async ({page})=>{
   await page.goto("https://demoblaze.com/");

   const loginButton = page.locator('#login2');
    await expect(loginButton).toBeVisible();

    await page.locator('#login2').click();
    
    await page.locator ('#loginusername').fill("aashi");
    await page.locator('#loginpassword').fill("123456@@aashi");
    await page.locator('[onclick^=logIn]').click();

    console.log(await page.locator("a[class*='list']").allTextContents());
});

