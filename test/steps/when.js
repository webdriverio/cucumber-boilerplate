/**
 * when steps
 */
module.exports = function () {
    this.When(
        /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
        require('../support/action/clickElement')
    );

    this.When(
        /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        require('../support/action/setInputField')
    );

    this.When(
        /^I clear the inputfield "([^"]*)?"$/,
        require('../support/action/clearInputField')
    );

    this.When(
        /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
        require('../support/action/dragElement')
    );

    this.When(
        /^I submit the form "([^"]*)?"$/,
        require('../support/action/submitForm')
    );

    this.When(
        /^I pause for (\d+)ms$/,
        require('../support/action/pause')
    );

    this.When(
        /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
        require('../support/action/setCookie')
    );

    this.When(
        /^I delete the cookie "([^"]*)?"$/,
        require('../support/action/readCookie')
    );

    this.When(
        /^I press "([^"]*)?"$/,
        require('../support/action/pressButton')
    );

    this.When(
        /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
        require('../support/action/handleModal')
    );

    this.When(
        /^I enter "([^"]*)?" into the prompt$/,
        require('../support/action/setPromptText')
    );

    this.When(
        /^I scroll to element "([^"]*)?"$/,
        require('../support/action/scroll')
    );

    this.When(
        /^I close the last opened (window|tab)$/,
        require('../support/action/closeLastOpenedWindow')
    );

    this.When(
        /^I focus the last opened (window|tab)$/,
        require('../support/action/focusLastOpenedWindow')
    );

    this.When(
        /^I log in to site with username "([^"]*)?" and password "([^"]*)?"$/,
        require('../support/custom/login')
    );

    this.When(
        /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
        require('../support/action/selectOptionByIndex')
    );

    this.When(
        /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        require('../support/action/selectOption')
    );

    this.When(
        /^I move to element "([^"]*)?"( with an offset of (\d+),(\d+))*$/,
        require('../support/action/moveToElement')
    );
};
