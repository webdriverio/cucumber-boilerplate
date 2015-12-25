/**
 * Configuration overwrites for the build process
 */
var config = require('./config.js').config;

exports.config = (function (globalConfig) {
    globalConfig.capabilities = {
        browserName: 'phantomjs'
    };

    return globalConfig;
})(config);
