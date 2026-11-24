const {test,expect}=require('@playwright/test');

test('Frame Handling', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes=await page.frames();
    console.log('Number of frames:',allframes.length);    //total frames 

    // const var =await page.frame('name');   
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    await frame1.fill("[name='mytext1']",'Hello')
});

test.only('Frame Handling approch 2', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const inputbox =await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
    await inputbox.fill('hello');

});

