const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const clearInputField = require('../../../test/support/action/clearInputField');

describe(
    'clearInputField', () => {
        let element, done;

        beforeEach(() => {
            global.browser = {clearElement: sinon.mock()};
            element = 'element_selector';
            done = sinon.mock();
        });

        it('should call clearElement on the browser', () => {
            clearInputField(element, done);

            assert(browser.clearElement.calledWith(element));

            assert(done.calledOnce);
        });
    }
);
