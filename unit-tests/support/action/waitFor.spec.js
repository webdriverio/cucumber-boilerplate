const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
import waitFor from '../../../test/support/action/waitFor';

describe(
    'waitFor', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                waitForExist: sinon.mock(),
                waitForSelected: sinon.mock(),
                waitForEnabled: sinon.mock(),
                waitForVisible: sinon.mock(),
                waitForText: sinon.mock(),
                waitForValue: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, undefined, '', done);

                assert(global.browser.waitForExist.calledOnce);
                assert(global.browser.waitForExist.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, false, '', done);

                assert(global.browser.waitForExist.calledOnce);
                assert(global.browser.waitForExist.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, true, '', done);

                assert(global.browser.waitForExist.calledOnce);
                assert(global.browser.waitForExist.calledWith(
                    'element',
                    1,
                    true
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should use a default value for the timeout',
            () => {
                waitFor('element', '', 0, false, false, '', done);

                assert(global.browser.waitForExist.calledOnce);
                assert(global.browser.waitForExist.calledWith(
                    'element',
                    3000,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForSelected on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be checked', done);

                assert(global.browser.waitForSelected.calledOnce);
                assert(global.browser.waitForSelected.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForEnabled on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be enabled', done);

                assert(global.browser.waitForEnabled.calledOnce);
                assert(global.browser.waitForEnabled.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForSelected on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be selected', done);

                assert(global.browser.waitForSelected.calledOnce);
                assert(global.browser.waitForSelected.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be visible', done);

                assert(global.browser.waitForVisible.calledOnce);
                assert(global.browser.waitForVisible.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForText on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'contain a text', done);

                assert(global.browser.waitForText.calledOnce);
                assert(global.browser.waitForText.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForValue on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'contain a value', done);

                assert(global.browser.waitForValue.calledOnce);
                assert(global.browser.waitForValue.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'exist', done);

                assert(global.browser.waitForExist.calledOnce);
                assert(global.browser.waitForExist.calledWith(
                    'element',
                    1,
                    false
                ));

                assert(done.calledOnce);
            }
        );
    }
);
