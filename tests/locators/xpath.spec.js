const{test,expect}=require('@playwright/test');

test('css locator',async ({page})=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@id='user-name']").fill("standard_user");
await page.locator("//input[@type='password']").fill("secret_sauce");
await page.locator("//input[@value='Login']").click();

await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();

await page.locator("//span[text()='Products']").click();
await page.locator("//button[@id='react-burger-menu-btn']").click();
console.log(await page.locator("//a[@href='#']").allTextContents());
});

test.only('Relationship in xpath',async ({page})=>{
    await page.goto("https://www.saucedemo.com/");


    //and: both conditin must be true for matching element
    await page.locator("//a[@role='button' and @id='logout_sidebar_link']");

    //or: any one condition must be true for matching element
    await page.locator("//a[@role='button' or @id='logout_sidebar_link']");

    // parent axes: to find the parent of current node
    await page.locator("//select[@aria-label='Sort products']//parent::span");

    //child axes: to find the child of current node
    await page.locator("//select[@aria-label='Sort products']//child::option[2]");

    // self axes: to find current node
    await page.locator("//select[@aria-label='Sort products']//self::select");

    //descendant: it select all decendants(child,grandchild etc) of current node
    await page.locator("//div[@id='contents_wrapper']//descendant::div");

    //ancestor: it select all ancestor(parent,grandparent etc) of current node
    await page.locator("//a[@id='logout_sidebar_link']//ancestor::div");

    //following:it select all nodes that appear after current node
    await page.locator("//a[@id='logout_sidebar_link']//following::a");

    //preceding: it select all nodes that appears before current node
    await page.locator("//div[@class='bm-menu']//preceding::div");

    //star- with() function locates an elements whose attribute values start with specific text
    await page.locator("//div[starts-with(@id,'nav-flyout')]");

    //contain() function is used for finding dynamic web elements /partial value
    await page.locator("//input[contains(@data-test,'name')]");

    //text() function is used to find element with exact text match
    await page.locator("//a[contains(text(), 'Program Agreement')]")    //not working
    
   //indexing
   await page.locator("(//a[@role='button'])[2]");

})