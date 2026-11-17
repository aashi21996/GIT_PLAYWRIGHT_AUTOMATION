const {test,expect}=require('@playwright/test');

test.skip('Alert with OK', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //dialog window handler
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

    })
    await page.click('#alertBtn');
    await page.waitForTimeout(5000);
});

test.skip('confirmation dialog  box with ok and cancel ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //dialog window handler
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept(); //close by using OK button
//  await dialog.dismiss(); //close by using cancel

    })
    await page.click("[onclick='myFunctionConfirm()']");
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
});

test('Prompt dialog ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //dialog window handler
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Aashi'); 
//  await dialog.dismiss(); //close by using cancel

    })
    await page.click("[onclick='myFunctionPrompt()']");
    await expect(page.locator('#demo')).toHaveText('Hello Aashi! How are you today?');
    await page.waitForTimeout(5000);
});

