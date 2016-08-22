/**
 * given steps
 */
module.exports = function () {
    this.Given(
        /^I open the (url|site) "([^"]*)?"$/,
        require('../support/action/openWebsite')
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* visible$/,
        require('../support/check/isVisible')
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* enabled$/,
        require('../support/check/isEnabled')
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* selected$/,
        require('../support/check/checkSelected')
    );

    this.Given(
        /^the checkbox "([^"]*)?" is( not)* checked$/,
        require('../support/check/checkSelected')
    );

    this.Given(
        /^there is (an|no) element "([^"]*)?" on the page$/,
        require('../support/check/checkElementExists')
    );

    this.Given(
        /^the title is( not)* "([^"]*)?"$/,
        require('../support/check/checkTitle')
    );

    this.Given(
        /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
        require('../support/check/compareText')
    );

    this.Given(
        /^the (element|inputfield) "([^"]*)?" does( not)* contain the text "([^"]*)?"$/,
        require('../support/check/checkContent')
    );

    this.Given(
        /^the (element|inputfield) "([^"]*)?" does( not)* contain any text$/,
        require('../support/check/checkContent')
    );

    this.Given(
        /^the page url is( not)* "([^"]*)?"$/,
        require('../support/check/checkURL')
    );

    this.Given(
        /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        require('../support/check/checkProperty')
    );

    this.Given(
        /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
        require('../support/check/checkCookieContent')
    );

    this.Given(
        /^the cookie "([^"]*)?" does( not)* exist$/,
        require('../support/check/checkCookieExists')
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        require('../support/check/checkDimension')
    );

    this.Given(
        /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        require('../support/check/checkOffset')
    );

    this.Given(
        /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
        require('../support/action/resizeScreenSize')
    );

    this.Given(
        /^I have closed all but the first (window|tab)$/,
        require('../support/action/closeAllButFirstTab')
    );

    this.Given(
        /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
        require('../support/check/checkModal')
    );
};
