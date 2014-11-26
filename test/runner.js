var Yadda = require('yadda'),
    config = require('config').env,
    should = require('chai').should(),
    beforeHook = require('./support/hooks/before.js'),
    afterHook = require('./support/hooks/after.js'),
    beforeEachHook = require('./support/hooks/beforeEach.js'),
    afterEachHook = require('./support/hooks/afterEach.js'),
    context = config,
    processed = 0,
    fileCount = null,
    currentStep;


/**
 * expose assertion library
 */
context.expect = chai.expect;
context.assert = chai.assert;

Yadda.plugins.mocha.AsyncScenarioLevelPlugin.init();

new Yadda.FeatureFileSearch('./test/features').each(function(file,i,files) {
    fileCount = fileCount === null ? files.length : fileCount;

    featureFile(file, function(feature) {

        if(feature.annotations.pending) {
            fileCount--;
        }

        before(function(done) {

            if(processed === 0) {
                return beforeHook(beforeEachHook.bind(null,done));
            }

            beforeEachHook(done);
        });
        scenarios(feature.scenarios, function(scenario, done) {
            var stepDefinitions = require('./support/step-definitions');
            var yadda = new Yadda.Yadda(stepDefinitions, context);
            yadda.yadda(scenario.steps, done);
        });

        Yadda.EventBus.instance().on(Yadda.EventBus.ON_EXECUTE, function(event) {
            currentStep = event.data.step;
        });

        after(function(done) {

            if(++processed === fileCount) {
                return afterEachHook(afterHook.bind(null,done));
            }

            afterEachHook(done);

        });

    });

});