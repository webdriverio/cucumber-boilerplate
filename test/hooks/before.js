var WebdriverIO = require('webdriverio'),
    config = require('config');

var BeforeHook = module.exports = function(done) {
    this.browser = WebdriverIO.remote(config.options);
    this.browser.init().call(done);
}
