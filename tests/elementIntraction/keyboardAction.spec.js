const{test,expect}=require('@playwright/test');

test('keyboard action', async ({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')

    const targetBox = page.locator("[name='text2']");

    await page.locator("[name='text1']").fill("aashi");

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    await page.keyboard.press('Control+V');
    await expect(targetBox).toHaveValue("aashi");

});

test('keyboard action 2', async ({page}) =>{

    await page.goto('https://textbox.johnjago.com/')
    await page.locator("//textarea").pressSequentially("hope for the best");
    await expect(page.locator("//textarea")).toHaveValue("hope for the best");

});


test.only('keyboard action 3', async ({page}) =>{
    await page.goto('https://textbox.johnjago.com/')
    await page.keyboard.type('hello world!');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.down('Shift');

    for(let i=0;i<' world'.length;i++)
    await page.keyboard.press ('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');

    await expect(page.locator('//textarea')).toHaveValue('hello!');

});