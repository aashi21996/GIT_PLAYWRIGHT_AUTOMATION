const{test,expect}=require('@playwright/test');

test('upload single file', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/upload/')

    await expect(page).toHaveTitle('Files Upload page for Automation Testing Practice');

    await page.waitForSelector('#fileInput');
    await page.locator('#fileInput').setInputFiles("tests/uploadFiles/test1.pdf");
    await page.locator('#fileSubmit').click();

    const uploadedFiles = page.locator('#uploaded-files');
    await expect(uploadedFiles).toContainText('test1.pdf');
});

test.only('upload multiple file', async ({page}) =>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/test1.pdf','tests/uploadFiles/test2.pdf'])
     
     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('test1.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('test2.pdf');

    await page.locator('#filesToUpload').setInputFiles([]);           //remove files
expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
});