var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('../support/configure'),
    babel = require('babel/register'),
    BeforeHook;

BeforeHook = module.exports = function (done) {
    var options = config.options;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;
    this.browser = WebdriverIO.remote(options);
    this.browser.init().call(done);
};
