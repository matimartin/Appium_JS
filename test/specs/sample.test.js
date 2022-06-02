const dialog = require("../pageobjects/dialog.page");
const expect = require('chai').expect;

describe('Example Appium App Test', ()=> {
    it('Happy Path', async ()=> {

        await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
        await driver.back();
        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();

        // Implicit wait - by defauld is written in wdio.conf file
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

        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();
        await dialog.dialogCancelBtn.click();

        await driver.setOrientation('LANDSCAPE');
        await driver.saveScreenshot('./screenshots/landscape.png');

        await driver.setOrientation('PORTRAIT');
        await driver.saveScreenshot('./screenshots/portrait.png');

    });

    it('get attribute value and get text value for repeat alarm check-box', async ()=> {

        let isChecked;
        let text;

        await dialog.repeatAlarmBtn.click();

        text = await dialog.weekCheckBox(0).getText();
        console.log("The text value for the index numer cero is: : " + await text);
        expect(await text).equal('Every Monday')

        isChecked = await dialog.weekCheckBox(0).getAttribute('checked');
        console.log("The attribute value for checked before clicked is: " + await isChecked);
        expect(await isChecked).equal('false');

        await dialog.weekCheckBox(0).click();
        
        isChecked = await dialog.weekCheckBox(0).getAttribute('checked');
        console.log("The attribute value for checked after clicked now is: " + await isChecked);
        expect(await isChecked).equal('true');

        await dialog.dialogOkBtn.click();

    });

    it('Scroll down and something else..', async ()=> {

        await driver.back();
        await driver.back();

        await dialog.viewBtn.click();

        await driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])
        
        await dialog.tabsBtn.click();
    });
    
});