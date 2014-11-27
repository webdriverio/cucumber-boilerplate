var WebdriverIO = require('webdriverio'),
    selenium = require('config').selenium,
    env = require('config').env;

var BeforeHook = module.exports = function(done) {

    GLOBAL.browser = WebdriverIO.remote({
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

    browser.init().call(done);

}
