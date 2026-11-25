const {test,expect} = require('@playwright/test');

test('Date Picker approach 1',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('[id=datepicker]').fill('11/25/2026');
    

})

test('Date Picker approach 2 using loop',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const date='29'
    const month= "December"
    const year="2027"

    await page.click('[id=datepicker]')
    
   while(true) {
   const currentmonth = await page.locator('.ui-datepicker-month').textContent();
   const currentyear = await page.locator('.ui-datepicker-year').textContent();

   if(currentyear==year && currentmonth==month)
   {
       break ;
   }
   await page.locator("[title='Next']").click()
}
 
const dates= await page.$$("//a[@class='ui-state-default']")

for(const dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click();
        break;
    }
}
   await page.waitForTimeout(5000);

})

test.only('Date Picker approach 3 without using loop',async({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const date='29'
    const month= "December"
    const year="2025"

    await page.click('[id=datepicker]')
    
   while(true) {
   const currentmonth = await page.locator('.ui-datepicker-month').textContent();
   const currentyear = await page.locator('.ui-datepicker-year').textContent();

   if(currentyear==year && currentmonth==month)
   {
       break ;
   }
   //await page.locator("[title='Next']").click()
   await page.locator("[title='Prev']").click()
}
 
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
   await page.waitForTimeout(5000);

})