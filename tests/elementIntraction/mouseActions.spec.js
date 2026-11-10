const{test,expect}=require('@playwright/test');

test('Mouse hover', async ({page}) =>{
    await page.goto('https://www.makemytrip.com/')

    const logo= page.locator("[data-cy='myBizIcon']")
    await logo.hover()

});

test('Right click', async ({page}) =>{
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button= page.locator("[class^='context-menu-one']")
    await button.click({button :'right'});

});

test.only('double click', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy= page.locator("[ondblclick='myFunction1()']")
    await btnCopy.dblclick();
    const data= page.locator("#field2");
    await expect(data).toHaveValue("Hello World!");

});