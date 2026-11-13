const {test,expect}=require('@playwright/test');


    test('Element State: Visible', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    const firstName = page.locator('#firstName');

    await firstName.waitFor({state:'visible'});
    await expect(firstName).toBeVisible();

});

test('Element State: Hidden', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    const firstName = page.locator('#firstName');

    // Hide the textbox
    await firstName.evaluate(element => {           //evaluate(): Playwright finds the textbox and lets us modify its properties using JavaScript.
        element.style.display = 'none';            //element.style.display = 'none'; 
                                                   //element = Our First Name textbox.
                                                   //style = CSS styling of that element.
                                                   //display = CSS property.
                                                   //none = Hides the element completely from the webpage layout.
    });
    await firstName.waitFor({ state: 'hidden' });

    await expect(firstName).toBeHidden();

});

test('Element State: Attached', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    const firstName = page.locator('#firstName');

    await firstName.waitFor({ state: 'attached' });

    await expect(firstName).toBeAttached();

});

test('Element State: Detached', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    const firstName = page.locator('#firstName');

    // Remove textbox from DOM
    await firstName.evaluate(element => {
        element.remove();
    });

    await firstName.waitFor({ state: 'detached' });

    await expect(firstName).not.toBeAttached();

});

test('Element State: Stable', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    const firstName = page.locator('#firstName');

    // Playwright automatically checks stability before clicking
    await firstName.click();

    await firstName.fill('Aashi');

    await expect(firstName).toHaveValue('Aashi');

});

test('Explicit Wait - URL', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill('Aashi');

    await page.locator('#lastName').fill('Kankane');

    await page.locator('#submit').click();

    await page.waitForURL('**/automation-practice-form');

});

test('Explicit Wait - Text', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill('Aashi');

    await page.waitForFunction(() => {
        return document.querySelector('#firstName').value === 'Aashi';
    });

});

test('Wait For Selector', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.waitForSelector('#firstName', {state: 'visible'});

    await page.locator('#firstName').fill('Aashi');

});

test('Wait For Load State', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.waitForLoadState('load');

    console.log('Page completely loaded');

});

test.only('Wait For DOM Content Loaded', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('#firstName')).toBeVisible();

});