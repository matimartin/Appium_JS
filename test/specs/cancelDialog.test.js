
const dialog = require("../pageobjects/dialog.page");
const data = require("../../data/data");
const { assert } = require("chai");

describe('test cases for the dialogs messages using data', async ()=> {

    beforeEach(async() =>{
        await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
    });

    it('Verify short messages', async() => {
        await dialog.cancelDialogShortMessageBtn.click();
        assert.include(await dialog.getDialogModalTitle(), data.shortDialog.msg, "Message recieved");
        await dialog.dialogOkBtn.click();
    });

    //after(async () => {
    //    console.log('AfterEach() function runs after every test execution');
    //    await driver.closeApp();
    //});

});

