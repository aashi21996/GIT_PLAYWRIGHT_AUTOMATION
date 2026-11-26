import{expect} from '@playwright/test'
import{test} from './customFixtures.spec'

test('has title',async({homepage})=>{
    await expect (homepage).toHaveTitle('Google')
})