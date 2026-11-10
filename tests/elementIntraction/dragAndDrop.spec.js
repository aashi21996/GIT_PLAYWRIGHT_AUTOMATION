const{test,expect}=require('@playwright/test');

test('Drag and Drop approch 1', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/drag-and-drop')

    const source= page.locator("#column-a")
    const destination= page.locator("#column-b")

    await source.hover()
    await page.mouse.down()

    await destination.hover()
    await page.mouse.up()

});

test('Drag and Drop approch2', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/drag-and-drop')

    const source= page.locator("#column-a")
    const destination= page.locator("#column-b")
    await source.dragTo(destination)


});