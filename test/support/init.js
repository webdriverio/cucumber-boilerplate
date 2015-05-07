var Yadda = require('yadda'),
    chai = require('chai'),
    path = require('path'),
    glob = require('glob'),
    merge = require('deepmerge'),
    config = require('./configure'),
    beforeHook = require('../hooks/before.js'),
    afterHook = require('../hooks/after.js'),
    beforeEachHook = require('../hooks/beforeEach.js'),
    afterEachHook = require('../hooks/afterEach.js'),
    processed = 0,
    fileCount = null,
    context = {},
    currentStep,
    runIsolateTestOnly = false;

/**
 * expose assertion library
 */
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

/**
 * register own global namespace
 */
global.testscope = {};

Yadda.plugins.mocha.StepLevelPlugin.init();

/**
 * gather feature files
 */
var files = [];
config.featureFiles.forEach(function(globPattern) {
    glob.sync(globPattern, { cwd: path.join(__dirname, '..', '..') }).forEach(function(file) {
        files.push(path.join(__dirname, '..', '..', file))
    });
});

/**
 * Looking for tests scenarios to run in isolation, if found set the flag to run only those
 */
files.forEach(function(file, i, files) {
    featureFile(file, function(feature) {
        scenarios(feature.scenarios, function(scenario) {
            if(scenario.annotations.isolate) {
                runIsolateTestOnly = true;
            }
        });
    });
});

files.forEach(function(file, i, files) {
    fileCount = fileCount === null ? files.length : fileCount;

    featureFile(file, function(feature) {

        if(feature.annotations.pending) {
            fileCount--;
        }

        before(function(done) {
            if(processed === 0) {
                return beforeHook.call(global.testscope, beforeEachHook.bind(global.testscope, done));
            }

            beforeEachHook.call(global.testscope, done);
        });

        scenarios(feature.scenarios, function(scenario) {
            if(runIsolateTestOnly && !scenario.annotations.isolate && !scenario.annotations.only) {
                return;
            }

            var stepDefinitions = require('./step-definitions');
            var yadda = new Yadda.Yadda(stepDefinitions, context);

            steps(scenario.steps, function(step, done) {
                var context = merge(global.testscope, config.env);

                if(scenario.annotations.executedBy) {
                    context.browser = context.browser.select(scenario.annotations.executedBy);
                }

                yadda.run(step, context, done);
            });
        });

        Yadda.EventBus.instance().on(Yadda.EventBus.ON_EXECUTE, function(event) {
            currentStep = event.data.step;
        });

        after(function(done) {

            if(++processed === fileCount) {
                return afterEachHook.call(global.testscope, afterHook.bind(global.testscope, done));
            }

            afterEachHook.call(global.testscope, done);

        });

    });

});
