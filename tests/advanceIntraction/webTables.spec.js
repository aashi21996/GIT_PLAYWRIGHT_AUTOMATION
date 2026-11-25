const {test,expect} = require('@playwright/test');


test('Web tables',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table= await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    console.log('Number of column', await columns.count());
    expect(await columns.count()).toBe(4);


    const rows = await table.locator('tbody tr');
    console.log('Number of rows', await rows.count());
    expect(await rows.count()).toBe(5);

    
});

test('Select single product from Web tables',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table= await page.locator('#productTable');
    
    const rows = await table.locator('tbody tr');

    const matchedRows = rows.filter({
    has: page.locator('td'),
    hasText : 'Smartwatch'
    })
 
    matchedRows.locator('input').check();

})

test('Select multiple product from Web tables',async({ page })=>{
      
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table= await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    const columns = await table.locator('thead tr th');

     await selectproduct(rows,page,'Laptop');
     await selectproduct(rows,page,'Wireless Earbuds');



    async function selectproduct(rows,page,name)
    {
       const matchedRows = rows.filter({
    has: page.locator('td'),
    hasText : name
    })
 
    await matchedRows.locator('input').check(); 
    }
})

test('Extract all data from web table',async({ page })=>{
      
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table= await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    const columns = await table.locator('thead tr th');

    for(let i=0;i< await rows.count(); i++)
    {
        const row =rows.nth(i);
        const tds=row.locator('td')

        for(let j=0;j< await tds.count()-1; j++)
        {
          console.log(await tds.nth(j).textContent())
        }
    }
})

test.only('Extract all data from all pages of web table ',async({ page })=>{
      
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table= await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    const columns = await table.locator('thead tr th');

    const pages= await page.locator('.pagination li a')
    console.log('Number of pages in the table', await pages.count())

    for(let p=0; p<await pages.count(); p++)
        {
            if(p>0)
            {
                await pages.nth(p).click()
            }

    for(let i=0;i< await rows.count(); i++)
    {
        const row =rows.nth(i);
        const tds=row.locator('td')

        for(let j=0;j< await tds.count()-1; j++)
        {
          console.log(await tds.nth(j).textContent())
        }
    }
}
})

