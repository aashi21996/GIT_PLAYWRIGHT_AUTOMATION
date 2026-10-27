const{test,expect}=require('@playwright/test');

test('buit-in locator', async ({page}) =>{
    await page.goto("https://www.amazon.in/");
    await page.locator("//input[@role='searchbox']").fill("laptop");
    await page.getByRole('button',{name: "Go",exact: true}).click();

    const promoText = page.getByText('Great Indian Festival').first();
    await expect(promoText).toBeVisible();

    await page.getByLabel("Free Shipping").click();

    await page.locator("//input[@role='searchbox']").fill("");
    await page.getByPlaceholder('Search Amazon.in').fill("mobile");

});

test.only('buit-in locators', async ({page}) =>{
    await page.goto("https://developer.salesforce.com/signup");
    const logoImage = page.getByAltText("Salesforce Home").filter({ visible: true });
    
    await expect(logoImage).toBeVisible();
    await logoImage.click();
});