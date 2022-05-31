const dialog = require("../pageobjects/dialog.page");
const expect = require('chai').expect;

describe('Example Appium App Test', ()=> {
    it('Happy Path', async ()=> {

        await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();

        // Implicit wait - by defauld in wdio.conf file
        // await driver.setImplicitWaitTimeout(10000);

        await dialog.userNameField.addValue("Testing UserName 1");
        await dialog.userNameField.clearValue();
        await dialog.userNameField.addValue("Testing UserName 2");

        await dialog.passwordField.addValue("Super secret Password!!!");
      
        let text = await dialog.userNameField.getText();
        expect(await text).equal("Testing UserName 2");

        await dialog.dialogOkBtn.click();

        await driver.back();
        await driver.saveScreenshot('./screenshots/backButton.png');
    });

    it('Verift Orientation test', async ()=> {

        console.log("The orientation of the device is: " + await driver.getOrientation());

        //await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();

        await driver.setOrientation('LANDSCAPE');
        await driver.saveScreenshot('./screenshots/landscape.png');

        await driver.setOrientation('PORTRAIT');
        await driver.saveScreenshot('./screenshots/portrait.png');

    });
});