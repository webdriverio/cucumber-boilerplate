/**
 * log in to site
 */

var githubPage = require('../pageObjects/githubPage.js');

module.exports = function (login, password, done) {
    return this.browser
        .windowHandleSize({width:1280,height:800})
        .pause(1000)
        .click(githubPage.signInButton)
        .setValue(githubPage.loginInput, login)
        .setValue(githubPage.passwordInput, password)
        .click(githubPage.signIn2Button)
        .pause(1000)
        .call(done);
};
