/**
 * this file generates the config attribute according
 * to current NODE_ENV
 */
var fs = require('fs'),
    path = require('path'),
    merge = require('deepmerge'),
    config = require('../config.js').config,
    envConfigPath = path.join(__dirname, '..', 'config.' + process.env.NODE_ENV + '.js');

if (process.env.NODE_ENV && fs.existsSync(envConfigPath)) {
    config = merge(config, require(envConfigPath).config);
}

module.exports = config;
