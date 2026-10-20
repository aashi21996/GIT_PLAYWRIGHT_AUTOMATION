const {test} =require('@playwright/test');

test('multi - browser contexts case',async({browser})=>{

    const context1 = await browser.newContext();
    const page1 =await context1.newPage();
    await page1.goto("https://www.flipkart.com/");
    console.log(await page1.title());
      
    const context2 = await browser.newContext();
    const page2 =await context2.newPage();
    await page2.goto("https://www.amazon.in/");
    console.log(await page2.title());  

});