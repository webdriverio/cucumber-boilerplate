const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const waitForVisible = require('../../../test/support/action/waitForVisible');

describe(
    'waitForVisible', () => {
        let done;
        let waitForVisibleStub;

        beforeEach(() => {
            global.browser = {
                waitForVisible: sinon.mock()

            };

            done = sinon.mock();
        });

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitForVisible('element', true, done);

                assert(global.browser.waitForVisible.calledOnce);
                assert(global.browser.waitForVisible.calledWith(
                    'element',
                    10000,
                    true
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitForVisible('element', false, done);

                assert(global.browser.waitForVisible.calledOnce);
                assert(global.browser.waitForVisible.calledWith(
                    'element',
                    10000,
                    false
                ));

                assert(done.calledOnce);
            }
        );
    }
);
