const {test,expect} = require('@playwright/test');

    let page;
    test.beforeEach(async({browser})=>{         //(u can use beforeAll also)

        page=await browser.newPage();
        await page.goto('https://www.demoblaze.com/')

        await page.locator("#login2").click()
        await page.locator("#loginusername").fill("pavanol")
        await page.locator("#loginpassword").fill("test@123")
        await page.locator("[onclick='logIn()']").click()

    })

    test.afterEach(async()=>{                     //(u can use afterAll)
        await page.click('#logout2')
    })

    test('Home Page',async()=>{

        const products= await page.$$('.hrefch')
        //expect(products).toHaveLength(9);
    });


    test('Add product to cart',async()=>{
        await page.click("//a[normalize-space()='Samsung galaxy s6']")
        await page.click("[onclick='addToCart(1)']")

        page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        })
        
    })