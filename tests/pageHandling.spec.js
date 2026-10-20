const { test} = require('@playwright/test');

test('Multiple tabs handling', async ({browser}) => {
  const context = await browser.newContext();

  const page1 = await context.newPage();
  await page1.goto('https://www.google.com');

  const page2 = await context.newPage();
  await page2.goto('https://www.flipkart.com');

  console.log('Google title:', await page1.title());
  console.log('Flipkart title:', await page2.title());

});


