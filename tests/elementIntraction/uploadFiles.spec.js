const{test,expect}=require('@playwright/test');

test('upload single file', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/upload/')
    await expect(page).toHaveTitle('File Uploader page for Automation Testing Practice');

    await page.locator('#fileInput');
    await 

    

});