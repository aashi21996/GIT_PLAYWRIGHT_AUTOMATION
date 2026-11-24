const {test,expect} = require('@playwright/test');
const { text } = require('stream/consumers');


test('Web tables',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table= await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    console.log('Number of column', await columns.count());
    expect(await columns.count()).toBe(4);


    const rows = await table.locator('tbody tr');
    console.log('Number of rows', await rows.count());
    expect(await rows.count()).toBe(5);

    const matchedRows = rows.filter({
    has: page.locator('td'),
    hasText : 'Smartwatch'
    })
 
    matchedRows.locator('input').check();
});
