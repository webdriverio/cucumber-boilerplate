const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const handleModal = require('../../../test/support/action/handleModal');

describe(
    'handleModal', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                alertAccept: sinon.mock(),
                alertDismiss: sinon.mock(),
                alertText: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call alertAccept on the browser to close a alertbox',
            () => {
                handleModal('accept', 'alertbox', done);

                assert(global.browser.alertAccept.calledOnce);
                assert(global.browser.alertDismiss.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call alertAccept on the browser to close a confirmbox',
            () => {
                handleModal('accept', 'confirmbox', done);

                assert(global.browser.alertAccept.calledOnce);
                assert(global.browser.alertDismiss.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call alertAccept on the browser to close a prompt',
            () => {
                handleModal('accept', 'prompt', done);

                assert(global.browser.alertAccept.calledOnce);
                assert(global.browser.alertDismiss.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call alertAccept on the browser to dismiss a alertbox',
            () => {
                handleModal('dismiss', 'alertbox', done);

                assert(global.browser.alertAccept.calledOnce);
                assert(global.browser.alertDismiss.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call alertDismiss on the browser to dismiss a confirmbox',
            () => {
                handleModal('dismiss', 'confirmbox', done);

                assert(global.browser.alertDismiss.calledOnce);
                assert(global.browser.alertAccept.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );

        it(
            'should call alertDismiss on the browser to dismiss a prompt',
            () => {
                handleModal('dismiss', 'prompt', done);

                assert(global.browser.alertDismiss.calledOnce);
                assert(global.browser.alertAccept.callCount === 0);
                assert(global.browser.alertText.callCount === 0);

                assert(done.calledOnce);
            }
        );
    }
);
