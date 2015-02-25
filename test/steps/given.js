/**
 * given steps
 */

module.exports = function() {

    this.given(/I open the (url|site) "$string"$/, function (type, page, done) {
            var url = type === 'url' ? page : this.baseUrl + page;
            this.browser.url(url , done);
        })

        .given(/^the element "$string" is( not)* visible$/,
            require('../support/helper/isVisible.js'))

        .given(/^there is (an|no) element "$string" on the page$/,
            require('../support/helper/checkElementExists.js'))

        .given(/^the title is( not)* "$string"$/,
            require('../support/helper/checkTitle'))

        .given(/^the element "$string" contains( not)* the same text as element "$string"$/,
            require('../support/helper/compareText'))

        .given(/^the (element|inputfield) "$string" does( not)* contain the text "([^"]*)"$/,
            require('../support/helper/checkContent'))

        .given(/^the page url is( not)* "$string"$/,
            require('../support/helper/checkURL'))

        .given(/^the( css)* attribute "$string" from element "$string" is( not)* "$string"$/,
            require('../support/helper/checkProperty'))

        .given(/^the checkbox "$string" is( not)* selected$/,
            require('../support/helper/checkSelected'))

        .given(/^the cookie "$string" contains( not)* the value "$string"$/,
            require('../support/helper/checkCookieContent'))

        .given(/^the cookie "$string" does( not)* exist$/,
            require('../support/helper/checkCookieExists'))

        .given(/^the element "$string" is( not)* \d+px (broad|tall)$/,
            require('../support/helper/checkDimension'));

}
