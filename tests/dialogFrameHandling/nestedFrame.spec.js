const {test,expect} = require('@playwright/test');


test('Nested Frames',async({ page })=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    expect(frame3).not.toBeNull();

    await frame3.locator("[name='mytext3']").fill('welcome');
    await expect(frame3.locator("[name='mytext3']")).toHaveValue('welcome');

    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("//div[@role='radio' and @aria-label='Hi, I am the UI.Vision IDE']").click();

});

