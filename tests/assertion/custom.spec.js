const {expect : baseExpect} = require('@playwright/test');

const expect =baseExpect.extend({

async toEnteredValue(locator,expectedText){

    let pass=false;
    try{

        await baseExpect(locator).toHaveValue(expectedText);
        pass=true;

    }

    catch(error)
    {
       pass=false;
    }

    return{
        pass,
        message: ()=>
            `Expected input to contain "${expectedText}"`

    };
}

});

export {expect};
