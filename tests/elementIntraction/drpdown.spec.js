const {test,expect}=require('@playwright/test');

test('basic drpdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     
    // if select tag is present
    await page.locator('#country').selectOption({label:'India'});     //label/visible text
    await page.locator('#country').selectOption('Japan');    //visible text

    await page.locator('#country').selectOption({value: 'uk'});    //value
    await page.locator('#country').selectOption({index: 1}); //index

    await page.selectOption('#country','France'); //direct 

    //if select tag is not present (select option from dropdown using loop)

    const options4 =await page.$$('#country option')  
    for(const option of options4)
    {
        let value=await option.textContent();
        if(value.includes('India'))
        {
            await page.selectOption('#country',value);
            break;
        }
    }
});
    
    test('basic drpdown assertion',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');


    //1st approach : check no. of options
    const options =await page.locator('#country option')  
    await expect(options).toHaveCount(10);                    //check no. of options

    //2nd approach : check no. of options
    const options1 =await page.$$('#country option')    //provide array of options
    console.log("number of options", options1.length);
    await expect (options1.length).toBe(10);

    //1st approach : check presence of option in dropdown
    const content =await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();

    //2nd approach : check presence of option in dropdown
    const options2 =await page.$$('#country option')  
    var status=false;
    for(const option of options2)
    {
        let value=await option.textContent();
        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }
await expect(status).toBeTruthy();

});

test ('Multiselect dropdown ',async({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Red','Yellow'])

    const data =await page.locator('#colors option');   //approch 1 : number of options
    await expect(data).toHaveCount(7);

    const data1 =await page.$$('#colors option');   //approch 2 : number of options
    console.log("Number of options",data1.length);
    await expect(data1.length).toBe(7);

    const data2 =await page.locator('#colors').textContent();  //check presence of option
    await expect(data2.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);
    

})

test('Bootstrap dropdown',async({page})=>{

    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.locator("[id*='fruit']").click();

    const listoption= page.locator("[id*='fruit'] option");
    await expect(listoption).toHaveCount(4);

    const value1= await page.$$("[id*='fruit']");
    for(const option of value1)
    {
        const value4= await option.textContent();

        if(value4.includes("Apple"))
        {

            await option.click();

            break;
        }
    }
})

test.only('Auto-suggestion',async({page})=>{
    await page.goto('https://www.google.com/aclk?sa=L&ai=DChsSEwiTkJWVzIKYAxUKwzwCHQ5COR0YACICCAEQAhoCc2Y&ae=2&aspm=1&co=1&ase=2&gclid=Cj0KCQiA5NXXBhDEARIsABAJhdLoekW0IvJRNgHO7J4AtZtsoB1-_VEkVboVKaNR4BDB58OVfrKLoTAaAut1EALw_wcB&cid=CAAS3gHkaD3NY3LqQhk5YKAj2wunByj4CWVdYyRPSLpqjug5Tu3P4SOimGayhyqLvJ4gEUK3ifHfPCtXiHEf_63y4lsbC62zSh9TapzGwY94z4OKUSybjX7Vb9nW6C6-ewl6gXjk9ZTYIHWBCc3TSt9Hwz1NNLUDPxrSCNS0kyK0SzOfTzvI7c_D2rTIqI7k-OZnlTjBoqtvEnD7FXExCWba-0HGXo044_DVCH9sJ8QdD092n1bA5x6YRP1I-byzQLuATtLfltHafXmP8PXSy2ukpSrX9yFWh4Tpug4QVtsEp4k&cce=2&category=acrcp_v1_35&sig=AOD64_2MR5Ncg1hrhmnKI3IEFUaAc0r9Tg&q&nis=4&adurl&ved=2ahUKEwiXpo-VzIKYAxUkkeEIHbvqBrkQ0Qx6BAgUEAE');
    await page.locator("[data-testid='closeIcon']").click();
    await page.locator("[placeholder='Where from?']").click();
    await page.locator("[placeholder='Where from?']").fill('del');
    await page.waitForSelector("//div[@class='mr-1 o-hidden']");

    const value6 = await page.$$("//div[@class='mr-1 o-hidden']");
    for(let option of value6){
    const data5= await option.textContent();
    console.log(data5);}
    await page.waitForTimeout(5000);
})

