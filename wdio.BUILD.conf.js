const config = require('./wdio.conf.js').config;

config.capabilities = [{
    browserName: 'phantomjs',
}];

config.services = ['phantomjs'];

exports.config = config;
