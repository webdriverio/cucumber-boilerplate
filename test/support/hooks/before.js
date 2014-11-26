var WebdriverJS = require('webdriverjs'),
    WebdriverCSS = require('webdrivercss'),
    selenium = require('config').selenium,
    env = require('config').env;

var BeforeHook = module.exports = function(done) {

    GLOBAL.browser = WebdriverJS.remote({
        // host: selenium.host,
        // port: selenium.port,
        // user: process.env._USER,
        // key:  process.env._KEY,
        logLevel: 'silent',
        desiredCapabilities: {
            name: env.projectname,
            browserName: 'phantomjs'
        }
    });

    // init webdrivercss
    //var webdrivercss = WebdriverCSS.init(browser, {
    //    screenshotRoot: env.projectname
    //});

    browser.init(done);

}
