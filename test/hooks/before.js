var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('../support/configure')
    glob = require("glob"),
    path = require('path');

var BeforeHook = module.exports = function(done) {

    var options = config.options,
    	self = this;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;

    this.browser = WebdriverIO.remote(options);

    glob.sync("../support/command/**/*.command.js", {cwd: path.join(__dirname)}).forEach(function(file) {
    	require(file).call(self);
    });

    this.browser.init().call(done);
}
