/**
 * then steps
 */
module.exports = function () {
    this.Then(
        /^I expect that the title is( not)* "([^"]*)?"$/,
        require('../support/check/checkTitle')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* visible$/,
        require('../support/check/isVisible')
    );

    this.Then(
        /^I expect that element "([^"]*)?" becomes( not)* visible$/,
        require('../support/action/waitForVisible')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
        require('../support/check/checkWithinViewport')
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* exist$/,
        require('../support/check/isExisting')
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* contain the same text as element "([^"]*)?"$/,
        require('../support/check/compareText')
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        require('../support/check/checkContent')
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?" does( not)* contain any text$/,
        require('../support/check/checkContent')
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?" is( not)* empty$/,
        require('../support/check/checkContainsText')
    );

    this.Then(
        /^I expect that the url is( not)* "([^"]*)?"$/,
        require('../support/check/checkURL')
    );

    this.Then(
        /^I expect that the path is( not)* "([^"]*)?"$/,
        require('../support/check/checkURLPath')
    );

    this.Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        require('../support/check/checkInURLPath')
    );

    this.Then(
        /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        require('../support/check/checkProperty')
    );

    this.Then(
        /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
        require('../support/check/checkSelected')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* selected$/,
        require('../support/check/checkSelected')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* enabled$/,
        require('../support/check/isEnabled')
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
        require('../support/check/checkCookieContent')
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* exists$/,
        require('../support/check/checkCookieExists')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        require('../support/check/checkDimension')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        require('../support/check/checkOffset')
    );

    this.Then(
        /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
        require('../support/check/checkClass')
    );

    this.Then(
        /^I expect a new (window|tab) has( not)* been opened$/,
        require('../support/check/checkNewWindow')
    );

    this.Then(
        /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
        require('../support/check/checkIsOpenedInNewWindow')
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* focused$/,
        require('../support/check/checkFocus')
    );

    this.Then(
        /^I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
        require('../support/action/waitfor')
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
        require('../support/check/checkModal')
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
        require('../support/check/checkModalText')
    );
};
