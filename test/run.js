#!/usr/bin/env node

/**
 * wrapper arround mocha cmd
 * figures out options and calls mocha with desired arguments
 */

var spawn = require('child_process').spawn,
    path = require('path'),
    args = [path.join(__dirname, '..', 'node_modules', 'mocha', 'bin', '_mocha')],
    config = require('./config').config,
    flag,
    proc;

/**
 * execute init script with mocha
 * init script handles the rest
 */
args.push(path.join(__dirname, 'support', 'init.js'));

/**
 * set mocha configs
 */
for (flag in (config.mochaOpts || {})) {
    args.push('--' + flag + '=' + config.mochaOpts[flag]);
}

process.argv.slice(2).forEach(function (arg) {
    var flag;

    /**
     * set mocha specific args
     */
    flag = arg.split('=')[0];
    switch (flag) {
        case '-d':
            args.unshift('--debug');
            break;
        case 'debug':
        case '--debug':
        case '--debug-brk':
            args.unshift(arg);
            break;
        case '-gc':
        case '--expose-gc':
            args.unshift('--expose-gc');
            break;
        case '--gc-global':
        case '--harmony':
        case '--harmony-proxies':
        case '--harmony-collections':
        case '--harmony-generators':
        case '--prof':
            args.unshift(arg);
            break;
        default:
            if (0 === arg.indexOf('--trace')) {
                args.unshift(arg);
            } else {
                args.push(arg);
            }
            break;
    }
});

proc = spawn(process.argv[0], args, {
    customFds: [0, 1, 2]
});
proc.on(
    'exit',
    function (code, signal) {
        process.on(
            'exit',
            function () {
                if (signal) {
                    process.kill(process.pid, signal);
                } else {
                    process.exit(code);
                }
            }
        );
    }
);
