const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const resizeScreenSize = require(
    '../../../test/support/action/resizeScreenSize'
);

describe(
    'resizeScreenSize', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                windowHandleSize: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call windowHandleSize on the browser object',
            () => {
                resizeScreenSize(1, 2, done);

                assert(global.browser.windowHandleSize.calledOnce);
                assert(global.browser.windowHandleSize.calledWith({
                    width: 1,
                    height: 2
                }));

                assert(done.calledOnce);
            }
        );
    }
);
