const {test,chromium,expect} = require('@playwright/test');

test.only('Test 1',async({page})=>{

    console.log("this is test 1");

    })

test.skip('Test 2',async({page})=>{

    console.log("this is test 2");

    })

test('Test 3',async({page,browserName})=>{

    console.log("this is test 3");
    if(browserName==="chromium")
    {
        test.skip()
    }

    })  

    test('Test 4',async({page})=>{
      
         test.fixme()
         console.log("this is test 4");

    })

    test('Test 5',async({page})=>{                  //used for negative testing

         test.fail()
         console.log("this is test 5");
         expect(1).toBe(2)

    })

    test('Test 6',async({page,browserName})=>{              

        console.log("this is test 6");
        if(browserName==='firefox')
        {
            test.fail()
        }

    })

    test('Test 7',async({page,browserName})=>{ 

        test.slow();
        console.log("this is test 7");
        await page.goto('https://www.demoblaze.com/');
    })