const {test,expect} = require('@playwright/test');

test('Page fixture',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");

})

test('Browser fixture',async({ browser })=>{

    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");

})

test('context fixture',async({ context })=>{

    const page=await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");

})

test('Browsername fixture',async({ browserName })=>{

    console.log(`this test is running on:${browserName}`);
})

test.only('Request fixture',async({ request})=>{

    const response=await request.get("https://api.restful-api.dev/objects?id=1")
    expect(response.ok()).toBeTruthy();

})