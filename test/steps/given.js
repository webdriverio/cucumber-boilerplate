const openWebsite = require('../support/action/openWebsite');
const isVisible = require('../support/check/isVisible');
const isEnabled = require('../support/check/isEnabled');
const checkSelected = require('../support/check/checkSelected');
const checkElementExists = require('../support/check/checkElementExists');
const checkTitle = require('../support/check/checkTitle');
const compareText = require('../support/check/compareText');
const checkContent = require('../support/check/checkContent');
const checkUrl = require('../support/check/checkURL');
const checkProperty = require('../support/check/checkProperty');
const checkCookieContent = require('../support/check/checkCookieContent');
const checkCookieExists = require('../support/check/checkCookieExists');
const checkDimension = require('../support/check/checkDimension');
const checkOffset = require('../support/check/checkOffset');
const resizeScreenSize = require('../support/action/resizeScreenSize');
const closeAllButFirstTab = require('../support/action/closeAllButFirstTab');
const checkModal = require('../support/check/checkModal');


module.exports = function given() {
    this.Given(
        /^I open the (url|site) "([^"]*)?"$/,
        openWebsite
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* visible$/,
        isVisible
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* selected$/,
        checkSelected
    );

    this.Given(
        /^the checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    );

    this.Given(
        /^there is (an|no) element "([^"]*)?" on the page$/,
        checkElementExists
    );

    this.Given(
        /^the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.Given(
        /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
        compareText
    );

    this.Given(
        /^the (element|inputfield) "([^"]*)?" does( not)* contain the text "([^"]*)?"$/,
        checkContent
    );

    this.Given(
        /^the (element|inputfield) "([^"]*)?" does( not)* contain any text$/,
        checkContent
    );

    this.Given(
        /^the page url is( not)* "([^"]*)?"$/,
        checkUrl
    );

    this.Given(
        /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        checkProperty
    );

    this.Given(
        /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
        checkCookieContent
    );

    this.Given(
        /^the cookie "([^"]*)?" does( not)* exist$/,
        checkCookieExists
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    );

    this.Given(
        /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
        resizeScreenSize
    );

    this.Given(
        /^I have closed all but the first (window|tab)$/,
        closeAllButFirstTab
    );

    this.Given(
        /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );
};
