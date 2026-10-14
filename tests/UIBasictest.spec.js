// @ts-check
const {test,expect} =require('@playwright/test');

test ('browser test case', async ({browser})=>{

   const context =await browser.newContext();
  const page =await context.newPage();
    await page.goto("https://www.flipkart.com/");
  console.log(await page.title());


});

test('First test case', async ({page})=>{

  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect (page).toHaveTitle("Google");                    //assertion
});



