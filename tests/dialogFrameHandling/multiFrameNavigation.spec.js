const {test,expect} = require('@playwright/test');


test('Multiple Frame Navigation',async({ page })=>{

     await page.goto('https://ui.vision/demo/webtest/frames/');

     const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
     await frame1.locator("[name='mytext1']").fill("aashi")
     await expect(frame1.locator("//div[text()='Frame1']")).toHaveText("Frame1");


     const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'});
     await frame2.locator("[name='mytext2']").fill("hello ji")
    await expect(frame2.locator("//div[text()='Frame2']")).toHaveText("Frame2");

});

test.only('Multiple Frame Navigation with Framelocator',async({ page })=>{

     await page.goto('https://ui.vision/demo/webtest/frames/');

     const frame3 = await page.frameLocator("[src='frame_3.html']");
     await frame3.locator("[name='mytext3']").fill("kankane")
     await expect(frame3.locator("//div[text()='Frame3']")).toHaveText("Frame3");


     const frame4 = await page.frameLocator("[src='frame_4.html']");
     await frame4.locator("[name='mytext4']").fill("bye")
    await expect(frame4.locator("//div[text()='Frame4']")).toHaveText("Frame4");

});