import {test} from '@playwright/test';

import{expect} from './custom.spec.js/';

test('custom assertion',async ({page})=>{

        await page.goto('https://demoqa.com/automation-practice-form');

        const attribute = await page.locator('#firstName');
        await attribute.fill('aashi');
        await expect(attribute).toEnteredValue("aaswhi");

});



