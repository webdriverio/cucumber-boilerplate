/**
 * given steps
 */

module.exports = function () {
    this
        .given(/I open the (url|site) "$string"$/,
            require('../support/action/openWebsite.js'))

        .given(/^the element "$string" is( not)* visible$/,
            require('../support/check/isVisible.js'))

        .given(/^there is (an|no) element "$string" on the page$/,
            require('../support/check/checkElementExists.js'))

        .given(/^the title is( not)* "$string"$/,
            require('../support/check/checkTitle'))

        .given(/^the element "$string" contains( not)* the same text as element "$string"$/,
            require('../support/check/compareText'))

        .given(/^the (element|inputfield) "$string" does( not)* contain the text "([^"]*)"$/,
            require('../support/check/checkContent'))

        .given(/^the page url is( not)* "$string"$/,
            require('../support/check/checkURL'))

        .given(/^the( css)* attribute "$string" from element "$string" is( not)* "$string"$/,
            require('../support/check/checkProperty'))

        .given(/^the checkbox "$string" is( not)* selected$/,
            require('../support/check/checkSelected'))

        .given(/^the cookie "$string" contains( not)* the value "$string"$/,
            require('../support/check/checkCookieContent'))

        .given(/^the cookie "$string" does( not)* exist$/,
            require('../support/check/checkCookieExists'))

        .given(/^the element "$string" is( not)* \d+px (broad|tall)$/,
            require('../support/check/checkDimension'));
};
