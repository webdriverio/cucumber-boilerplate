const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const selectOptionByIndex = require('../../../test/support/action/selectOptionByIndex');

describe(
    'selectOptionByIndex', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                selectByIndex: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call selectByIndex on the browser object',
            () => {
                selectOptionByIndex(1, '', 'element', done);

                assert(global.browser.selectByIndex.calledOnce);
                assert(global.browser.selectByIndex.calledWith('element', 1));

                assert(done.calledOnce);
            }
        );
    }
);
