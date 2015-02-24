var WebdriverIO = require('webdriverio'),
    config = require('../config').config;

var BeforeHook = module.exports = function(done) {

    var options = config.options;
    options.desiredCapabilites = config.capabilities;

    this.browser = WebdriverIO.remote(options);
    this.browser.init().call(done);
}
