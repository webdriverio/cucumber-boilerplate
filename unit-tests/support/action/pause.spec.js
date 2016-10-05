const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const pause = require('../../../test/support/action/pause');

describe(
    'pause', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                pause: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call pause on the browser object',
            () => {
                pause(1000, done);

                assert(global.browser.pause.calledOnce);
                assert(global.browser.pause.calledWith(1000));

                assert(done.calledOnce);
            }
        );
    }
);
