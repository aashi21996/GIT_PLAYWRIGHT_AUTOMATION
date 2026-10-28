const{test,expect}=require('@playwright/test');

test('ARIA roles', async ({page}) =>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await expect(page.getByRole("heading",{name:'Register Account'})).toBeVisible();

    await expect(page.getByRole("checkbox")).toBeVisible();
    await page.getByRole("checkbox").click();

    await expect(page.getByRole("radio",{name: "Yes"})).toBeVisible();
    await page.getByRole("radio",{name: "Yes"}).click();

    await expect(page.getByRole("link",{name: "Forgotten Password"})).toBeVisible();
    await page.getByRole("link",{name: "Forgotten Password"}).click();

    await expect(page.getByRole("button",{name:"continue"})).toBeVisible();
    await page.getByRole("button",{name:"continue"}).click();
});