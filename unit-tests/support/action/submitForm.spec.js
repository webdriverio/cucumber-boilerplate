const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const submitForm = require('../../../test/support/action/submitForm');

describe(
    'submitForm', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                submitForm: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call submitForm on the browser object',
            () => {
                submitForm('form', done);

                assert(global.browser.submitForm.calledOnce);
                assert(global.browser.submitForm.calledWith('form'));

                assert(done.calledOnce);
            }
        );
    }
);
