var Yadda = require('yadda'),
    config = require('../config').config,
    chai = require('chai'),
    merge = require('deepmerge'),
    beforeHook = require('../hooks/before.js'),
    afterHook = require('../hooks/after.js'),
    beforeEachHook = require('../hooks/beforeEach.js'),
    afterEachHook = require('../hooks/afterEach.js'),
    processed = 0,
    fileCount = null,
    context = {},
    currentStep;

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

new Yadda.FeatureFileSearch('./test/features').each(function(file,i,files) {
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
