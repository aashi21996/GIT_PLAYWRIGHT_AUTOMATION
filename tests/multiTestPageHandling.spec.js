const { test,expect} = require('@playwright/test');

test('Test 1: Google Page Test', async ({ page }) => {
  await page.goto('https://www.google.com');
  
  console.log('Test 1 - Current Page Title:', await page.title());
  await expect(page).toHaveTitle('Google');
});

test('Test 2: Flipkart Page Test', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  
  console.log('Test 2 - Current Page Title:', await page.title());
});