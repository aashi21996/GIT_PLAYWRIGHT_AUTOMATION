const {test,chromium,expect} = require('@playwright/test');

test('Handle Windows/Pages',async()=>{

     const browser=await chromium.launch()
     const context =await browser.newContext()

     const page1= await context.newPage()
     const page2= await context.newPage()

     const allpages= context.pages()
     console.log("No. of pages created",allpages.length)

     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await expect(page1).toHaveTitle('OrangeHRM')

     await page2.goto('https://orangehrm.com/')
     await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
})

test.only('Handle multiple Windows/Pages',async()=>{

     const browser=await chromium.launch()
     const context =await browser.newContext()

     const page1= await context.newPage()

     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise=  context.waitForEvent('page')
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()

    const newPage= await pagePromise;
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')

    await browser.close();
     
})