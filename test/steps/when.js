/**
 * when steps
 */

module.exports = function () {
    this
        .when(/^I (click|doubleclick) on the (link|button|element) "$string"$/,
            require('../support/action/clickElement'))

        .when(/^I (add|set) "$string" to the inputfield "$string"$/,
            require('../support/action/setInputField'))

        .when(/^I clear the inputfield "$string"$/,
            require('../support/action/clearInputField'))

        .when(/^I drag element "$string" to element "$string"$/,
            require('../support/action/dragElement'))

        .when(/^I submit the form "$string"$/,
            require('../support/action/submitForm'))

        .when(/^I wait on element "$string"( for (\d+)ms)*( to (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
            require('../support/action/waitfor'))

        .when(/^I pause for (\d+)ms$/,
            require('../support/action/pause'))

        .when(/^I set a cookie "$string" with the content "$string"$/,
            require('../support/action/setCookie'))

        .when(/^I delete the cookie "$string"$/,
            require('../support/action/readCookie'))

        .when(/^I press "$string"$/,
            require('../support/action/pressButton'))

        .when(/^I log in to site with username "$string" and password "$string"$/,
            require('../support/custom/login'))

        /**
         * ToDo add tests
         */
        .when(/^I (accept|dismiss) the alertbox$/,
            require('../support/action/handleAlertbox'))

        .when(/^I focus the last opened (window|tab)$/,
            require('../support/action/focusLastOpenedWindow'));
};
