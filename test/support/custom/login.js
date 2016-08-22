/**
 * log in to site
 */

var githubPage = require('../pageObjects/githubPage.js');

module.exports = (login, password, done) => {
    browser.windowHandleSize({width:1280,height:800});
    browser.pause(1000);
    browser.click(githubPage.signInButton);
    browser.setValue(githubPage.loginInput, login);
    browser.setValue(githubPage.passwordInput, password);
    browser.click(githubPage.signIn2Button);
    browser.pause(1000);

    done();
};
