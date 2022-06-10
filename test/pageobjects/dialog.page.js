const { title } = require("wd/lib/commands");
const { Return } = require("wd/lib/special-keys");

class Dialog {
    /**
     * define selectors using getter methods
     */
    get appBtn() {return $('//android.widget.TextView[@content-desc="App"]');}
    get alertDialogBtn() { return $('//android.widget.TextView[@content-desc="Alert Dialogs"]') }
    get textEntryDialogBtn() { return $('//android.widget.Button[@content-desc="Text Entry dialog"]') }
    get userNameField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]') }
    get passwordField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]') }

    get dialogOkBtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get dialogCancelBtn () { return $('//android.widget.Button[@resource-id="android:id/button2"]') }

    get everyMondayBtn() { return $('//android.widget.CheckedTextView[@index="0"]') }
    get days() { return $$('//android.widget.CheckedTextView') }

    get viewBtn() { return $('//android.widget.TextView[@content-desc="Views"]') }

    get repeatAlarmBtn() { return $('//android.widget.Button[@content-desc="Repeat alarm"]') }

    weekCheckBox(index) { 
        return $(`//android.widget.CheckedTextView[@index="${index}"]`)
    }

    get tabBtn() { return $('//android.widget.TextView[@content-desc="Tabs"]') }
    get contentByIdBtn() { return $('//android.widget.TextView[@content-desc="1. Content By Id"]') }
    get tabs() { return $$('android.widget.TextView') }
    get tab1Details() { return $('~tab1')} // we use accessibility id here
    get tab2Details() { return $('~tab2')} // we use accessibility id here
    get tab3Details() { return $('~tab3')} // we use accessibility id here

    //#region data activity
    get cancelDialogShortMessageBtn() { return $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]') }
    get cancelDialogLongtMessageBtn() { return $('//android.widget.Button[@content-desc="OK Cancel dialog with a long message"]') }
    get cancelDialogUltraMessageBtn() { return $('//android.widget.Button[@content-desc="OK Cancel dialog with ultra long message"]') }
    get shortMessageMsg() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]') }
                
    getDialogModalTitle() {
        let title = this.shortMessageMsg.getText();
        return title;
    }
    //#endregion
    
}

module.exports = new Dialog();