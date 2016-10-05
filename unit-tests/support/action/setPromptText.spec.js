const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const setPromptText = require('../../../test/support/action/setPromptText');

describe(
    'setPromptText', () => {
        let alertTextMock;
        let done;
        let error = {
            type: 'Error'
        };

        beforeEach(() => {
            alertTextMock = sinon.mock();

            // alertTextMock.withArgs('modalText').returns(true);
            // alertTextMock.withArgs('modalText2').throws(error);

            global.browser = {
                alertText: alertTextMock
            };

            global.assert = sinon.mock();

            done = sinon.mock();
        });

        it(
            'should call alertText on the browser object',
            () => {
                setPromptText('modalText', done);

                assert(global.browser.alertText.calledOnce);
                assert(global.browser.alertText.calledWith('modalText'));

                assert(done.calledOnce);
            }
        );

        it(
            'should call fail when no prompt is open',
            () => {
                alertTextMock.throws(error);

                setPromptText('modalText2', done);

                assert(global.browser.alertText.calledOnce);
                assert(global.browser.alertText.calledWith('modalText2'));
                assert(global.browser.alertText.threw());

                assert(global.assert.calledOnce);
                assert(global.assert.calledWith(
                    error,
                    'A prompt was not open when it should have been open'
                ));

                assert(done.calledOnce);
            }
        );
    }
);
