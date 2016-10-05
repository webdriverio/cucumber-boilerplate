const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const setInputField = require('../../../test/support/action/setInputField');

describe(
    'setInputField', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                addValue: sinon.mock(),
                setValue: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call addValue on the browser object',
            () => {
                setInputField('add', 'value', 'element', done);

                assert(global.browser.addValue.calledOnce);
                assert(global.browser.addValue.calledWith(
                    'element',
                    'value'
                ));

                assert(global.browser.setValue.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call setValue on the browser object',
            () => {
                setInputField('set', 'value', 'element', done);

                assert(global.browser.setValue.calledOnce);
                assert(global.browser.setValue.calledWith(
                    'element',
                    'value'
                ));

                assert(global.browser.addValue.callCount === 0);

                assert(done.calledOnce);
            }
        );
    }
);
