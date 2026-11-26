const {test,chromium,expect} = require('@playwright/test');

test('File Download',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download')

    const[download]= await Promise.all([
       page.waitForEvent ("download"),
        page.click("//a[normalize-space()='pearson.txt']")
    ])

    const path =await download.path()
    console.log("download temp path :", path)
    expect(path).toBeTruthy();

    await download.saveAs("downloads/myfile.pdf")
    console.log("file saved to:downloads/myfile.pdf ")

})

