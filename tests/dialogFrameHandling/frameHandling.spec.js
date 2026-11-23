const {test,expect}=require('@playwright/test');

test('Frame Handling', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes=await page.frames();
    console.log('Number of frames:',allframes.length);    //total frames 

    

});