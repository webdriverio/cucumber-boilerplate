const clickElement = require('../support/action/clickElement');
const setInputField = require('../support/action/setInputField');
const clearInputField = require('../support/action/clearInputField');
const dragElement = require('../support/action/dragElement');
const submitForm = require('../support/action/submitForm');
const pause = require('../support/action/pause');
const setCookie = require('../support/action/setCookie');
const readCookie = require('../support/action/readCookie');
const pressButton = require('../support/action/pressButton');
const handleModal = require('../support/action/handleModal');
const setPromptText = require('../support/action/setPromptText');
const scroll = require('../support/action/scroll');
const closeLastOpenedWindow =
    require('../support/action/closeLastOpenedWindow');
const focusLastOpenedWindow =
    require('../support/action/focusLastOpenedWindow');
const selectOptionByIndex = require('../support/action/selectOptionByIndex');
const selectOption = require('../support/action/selectOption');
const moveToElement = require('../support/action/moveToElement');

module.exports = function when() {
    this.When(
        /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
        clickElement
    );

    this.When(
        /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        setInputField
    );

    this.When(
        /^I clear the inputfield "([^"]*)?"$/,
        clearInputField
    );

    this.When(
        /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
        dragElement
    );

    this.When(
        /^I submit the form "([^"]*)?"$/,
        submitForm
    );

    this.When(
        /^I pause for (\d+)ms$/,
        pause
    );

    this.When(
        /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
        setCookie
    );

    this.When(
        /^I delete the cookie "([^"]*)?"$/,
        readCookie
    );

    this.When(
        /^I press "([^"]*)?"$/,
        pressButton
    );

    this.When(
        /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
        handleModal
    );

    this.When(
        /^I enter "([^"]*)?" into the prompt$/,
        setPromptText
    );

    this.When(
        /^I scroll to element "([^"]*)?"$/,
        scroll
    );

    this.When(
        /^I close the last opened (window|tab)$/,
        closeLastOpenedWindow
    );

    this.When(
        /^I focus the last opened (window|tab)$/,
        focusLastOpenedWindow
    );

    this.When(
        /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
        selectOptionByIndex
    );

    this.When(
        /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        selectOption
    );

    this.When(
        /^I move to element "([^"]*)?"( with an offset of (\d+),(\d+))*$/,
        moveToElement
    );
};
