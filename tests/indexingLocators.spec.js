const{test,expect}=require('@playwright/test');

test.only('second test', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("aashi");
    //await page.locator('#username').fill("");
    await page.locator('#username').clear();

    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('[name=signin]').press('Enter');

  //console.log(await page.locator('.card-title a').textContent());    4 elements are there: error

   console.log(await page.locator('.card-title a').first().textContent());
   await expect(page.locator('.card-title a').first()).toContainText('iphone X');


   console.log(await page.locator('.card-title a').nth(1).textContent());
   await expect(page.locator('.card-title a').nth(1)).toContainText('Samsung Note 8');

   console.log(await page.locator('.card-title a').last().textContent());
   await expect(page.locator('.card-title a').last()).toContainText('Blackberry');


});


test('practice indexing',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill("aashi.kankane21996@gmail.com");
    await page.locator('#userPassword').fill("Aashi@14");
    await page.locator('[value=Login]').click();

   //await page.waitForLoadState('networkidle');     unreliable
   await page.locator('.card-body b').first().waitFor();
   const title =await page.locator('.card-body b').allTextContents();
   console.log(title);

});