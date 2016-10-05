const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const pressButton = require('../../../test/support/action/pressButton');

describe(
    'pressButton', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                keys: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call keys on the browser object',
            () => {
                pressButton('e', done);

                assert(global.browser.keys.calledOnce);
                assert(global.browser.keys.calledWith('e'));

                assert(done.calledOnce);
            }
        );
    }
);
