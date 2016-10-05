const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const deleteCookie = require('../../../test/support/action/deleteCookie');

describe(
    'deleteCookie', () => {
        let done, mock;

        beforeEach(() => {
            global.browser = {
                deleteCookie: sinon.mock()
            };

            done = sinon.mock();
        });

        it('should call deleteCookie on the browser', () => {
            deleteCookie('test', done);

            assert(global.browser.deleteCookie.calledOnce);

            assert(global.browser.deleteCookie.calledWith('test'));

            assert(done.calledOnce);
        });
    }
);
