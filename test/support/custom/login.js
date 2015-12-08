/**
 * log in to site
 */

var githubPage = require('../pageObjects/githubPage.js');

module.exports = function (login, password, done) {
    this.browser
        .timeoutsImplicitWait(5000)
        .click(githubPage.signInButton)
        .setValue(githubPage.loginInput, login)
        .setValue(githubPage.passwordInput, password)
        .click(githubPage.signIn2Button).call(done);
};
