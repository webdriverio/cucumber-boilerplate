/**
 * then steps
 */

module.exports = function(dict) {

    this.then(/^I expect that the title is( not)* "$string"$/, require('../helper/checkTitle'))
        .then(/^I expect that element "$string" is( not)* visible$/, require('../helper/isVisible'))
        .then(/^I expect that element "$string" does( not)* exist$/, require('../helper/isExisting'))
        .then(/^I expect that element "$string" does( not)* contain the same text as element "$string"$/, require('../helper/compareText'))
        .then(/^I expect that (element|inputfield) "$string"( not)* contains the text "([^"]*)"$/, require('../helper/checkContent'))
        .then(/^I expect that the url is( not)* "$string"$/, require('../helper/checkURL'))
        .then(/^I expect that the( css)* attribute "$string" from element "$string" is( not)* "$string"$/, require('../helper/checkProperty'))
        .then(/^I expect that checkbox "$string" is( not)* selected$/, require('../helper/checkSelected'))
        .then(/^I expect that cookie "$string"( not)* contains "$string"$/, require('../helper/checkCookieContent'))
        .then(/^I expect that cookie "$string"( not)* exists$/, require('../helper/checkCookieExists'))

        // TODO
        .then(/^I expect that element "$string" is( not)* \d+px (broad|tall)$/, require('../helper/checkDimension'));
        // .then(/^I expect that element "$string" is positioned \d+px (from the top|from the right|from the bottom|from the right)$/);

};