/**
 * given steps
 */

module.exports = function() {

    this.given(/I open the (URL|site) "$string"*$/, function (type, page, done) {
            var url = type === 'URL' ? page : this.baseUrl + page;
            browser.url(url , done);
        })
        .given(/^the element "$string" is( not)* visible$/, require('../helper/isVisible.js'))
        .given(/^there is (a|no)+ element "$string" on the page$/, require('../helper/checkElementExists.js'))
        .given(/^the title is( not)* "$string"$/, require('../helper/checkTitle'))
        .given(/^the element "$string" contains( not)* the same text as element "$string"$/, require('../helper/compareText'))
        .given(/^the (element|inputfield) "$string" does( not)* contain the text "([^"]*)"$/, require('../helper/checkContent'))
        .given(/^the page url is( not)* "$string"$/, require('../helper/checkURL'))
        .given(/^the( css)* attribut "$string" from (element|inputfield) "$string" is( not)* "$string"$/, require('../helper/checkProperty'))
        .given(/^the checkbox "$string" is( not)* selected$/, require('../helper/checkSelected'))
        .given(/^the cookie "$string" contains( not)* the value "$string"$/, require('../helper/checkCookieContent'))
        .given(/^the cookie "$string"( not)* exists$/, require('../helper/checkCookieExists'));

        // TODO
        .given(/^the element "$string" is( not)* "$string" (broad|tall)$/, require('../helper/checkDimension'))
        .given(/^the element "$string" is positioned \d+px (from the top|from the right|from the bottom|from the right)$/)

}