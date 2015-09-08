/**
 * log in to site
 */

var githubPage = require('../pageObjects/githubPage.js');

var login = function (login, password, done) {

    var that = this;

    return this.browser.timeoutsImplicitWait(5000).then(function () {
        that.browser.click(githubPage.signInButton);
        return that.browser.setValue(githubPage.loginInput, login);
    }).then(function () {
        return that.browser.setValue(githubPage.passwordInput, password);
    }).then(function () {
        return that.browser.click(githubPage.signIn2Button);
    }).then(function () {
        return done();
    });
};

module.exports = login;
