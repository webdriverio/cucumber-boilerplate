const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'phantomjs',
}];

wdioConfig.config.services = ['phantomjs'];

exports.config = wdioConfig.config;
