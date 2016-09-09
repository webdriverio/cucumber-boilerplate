const checkTitle = require('../support/check/checkTitle');
const isVisible = require('../support/check/isVisible');
const waitForVisible = require('../support/action/waitForVisible');
const checkContainsText = require('../support/check/checkContainsText');
const checkContent = require('../support/check/checkContent');
const compareText = require('../support/check/compareText');
const isExisting = require('../support/check/isExisting');
const checkWithinViewport = require('../support/check/checkWithinViewport');
const checkURL = require('../support/check/checkURL');
const checkURLPath = require('../support/check/checkURLPath');
const checkInURLPath = require('../support/check/checkInURLPath');
const checkProperty = require('../support/check/checkProperty');
const checkSelected = require('../support/check/checkSelected');
const isEnabled = require('../support/check/isEnabled');
const checkCookieContent = require('../support/check/checkCookieContent');
const checkCookieExists = require('../support/check/checkCookieExists');
const checkDimension = require('../support/check/checkDimension');
const checkOffset = require('../support/check/checkOffset');
const checkClass = require('../support/check/checkClass');
const checkNewWindow = require('../support/check/checkNewWindow');
const checkIsOpenedInNewWindow =
    require('../support/check/checkIsOpenedInNewWindow');
const checkFocus = require('../support/check/checkFocus');
const waitfor = require('../support/action/waitfor');
const checkModal = require('../support/check/checkModal');
const checkModalText = require('../support/check/checkModalText');

module.exports = function then() {
    this.Then(
        /^I expect that the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* visible$/,
        isVisible
    );

    this.Then(
        /^I expect that element "([^"]*)?" becomes( not)* visible$/,
        waitForVisible
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
        checkWithinViewport
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* exist$/,
        isExisting
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* contain the same text as element "([^"]*)?"$/,
        compareText
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        checkContent
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?" does( not)* contain any text$/,
        checkContent
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?" is( not)* empty$/,
        checkContainsText
    );

    this.Then(
        /^I expect that the url is( not)* "([^"]*)?"$/,
        checkURL
    );

    this.Then(
        /^I expect that the path is( not)* "([^"]*)?"$/,
        checkURLPath
    );

    this.Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        checkInURLPath
    );

    this.Then(
        /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        checkProperty
    );

    this.Then(
        /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* selected$/,
        checkSelected
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
        checkCookieContent
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* exists$/,
        checkCookieExists
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    );

    this.Then(
        /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
        checkClass
    );

    this.Then(
        /^I expect a new (window|tab) has( not)* been opened$/,
        checkNewWindow
    );

    this.Then(
        /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
        checkIsOpenedInNewWindow
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* focused$/,
        checkFocus
    );

    this.Then(
        /^I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
        waitfor
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
        checkModalText
    );
};
