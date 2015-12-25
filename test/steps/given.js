/**
 * given steps
 */

module.exports = function () {
    this
        .given(/I open the (url|site) "$string"$/,
            require('../support/action/openWebsite'))

        .given(/^the element "$string" is( not)* visible$/,
            require('../support/check/isVisible'))

        .given(/^the element "$string" is( not)* enabled$/,
            require('../support/check/isEnabled'))

        .given(/^the element "$string" is( not)* selected$/,
            require('../support/check/checkSelected'))

        .given(/^the checkbox "$string" is( not)* checked$/,
            require('../support/check/checkSelected'))

        .given(/^there is (an|no) element "$string" on the page$/,
            require('../support/check/checkElementExists'))

        .given(/^the title is( not)* "$string"$/,
            require('../support/check/checkTitle'))

        .given(/^the element "$string" contains( not)* the same text as element "$string"$/,
            require('../support/check/compareText'))

        .given(/^the (element|inputfield) "$string" does( not)* contain the text "$string"$/,
            require('../support/check/checkContent'))

        .given(/^the (element|inputfield) "$string" does( not)* contain any text$/,
            require('../support/check/checkContent'))

        .given(/^the page url is( not)* "$string"$/,
            require('../support/check/checkURL'))

        .given(/^the( css)* attribute "$string" from element "$string" is( not)* "$string"$/,
            require('../support/check/checkProperty'))

        .given(/^the cookie "$string" contains( not)* the value "$string"$/,
            require('../support/check/checkCookieContent'))

        .given(/^the cookie "$string" does( not)* exist$/,
            require('../support/check/checkCookieExists'))

        .given(/^the element "$string" is( not)* ([\d]+)px (broad|tall)$/,
            require('../support/check/checkDimension'))

        .given(/^the element "$string" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
            require('../support/check/checkOffset'))

        .given(/^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
            require('../support/action/resizeScreenSize'))

        .given(/^I have closed all but the first (window|tab)$/,
            require('../support/action/closeAllButFirstTab'))

        .given(/^a (alertbox|confirmbox|prompt) is( not)* opened$/,
            require('../support/check/checkModal'));
};
