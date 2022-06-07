const dialog = require("../pageobjects/dialog.page");
const expect = require('chai').expect;

describe('Example Appium App Test', ()=> {

    before(async ()=>{
        console.log('The before() function will be exectuted at the start of the test suit');
    });

    beforeEach(async ()=>{
        console.log('The beforeEach() function will be executed before every test');
    });

    it('Happy Path', async ()=> {

        await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
        await driver.back();
        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();

        // Implicit wait - by default is written in wdio.conf file
        // Explicit wait - Await driver.setImplicitWaitTimeout(10000);

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

    it('Verify scroll down and elements states', async ()=> {

        let isEnabled;
        let isSelected;
        let isDisplayed;

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
        
        await dialog.tabBtn.click();
        await dialog.contentByIdBtn.click();
        await dialog.tabs[0].click();

        for (i = 0; i < 3; i++) {
            isEnabled = await dialog.tabs[0].isEnabled();
            isSelected = await dialog.tabs[0].isSelected();
            isDisplayed = await dialog.tabs[0].isDisplayed();

            console.log(`Tab: ${i+1}` );
            console.log('is enabled: ' + await isEnabled);
            console.log('is selected: ' + await isSelected);
            console.log('is disabled: ' + await isDisplayed);
            
            if (isEnabled && isDisplayed) {
                console.log('Tab Details 1: ' + await dialog.tab1Details.isDisplayed());
                console.log('Tab Details 2: ' + await dialog.tab2Details.isDisplayed());
                console.log('Tab Details 3: ' + await dialog.tab3Details.isDisplayed());               
            }

        }
    });

    afterEach(async ()=>{
        console.log('The afterEach() function will be executed after every test, then a good idea is to reset the app that way every test has a fresh app to run the test');
        //await driver.reset();
    }); 
});