const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const scroll = require('../../../test/support/action/scroll');

describe(
    'scroll', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                scroll: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call scroll on the browser object',
            () => {
                scroll('element', done);

                assert(global.browser.scroll.calledOnce);
                assert(global.browser.scroll.calledWith('element'));

                assert(done.calledOnce);
            }
        );
    }
);
