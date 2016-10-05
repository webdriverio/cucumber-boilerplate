const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const setCookie = require('../../../test/support/action/setCookie');

describe(
    'setCookie', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                setCookie: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call setCookie on the browser object',
            () => {
                setCookie('cookieName', 'cookieContent', done);

                assert(global.browser.setCookie.calledOnce);
                assert(global.browser.setCookie.calledWith({
                    name: 'cookieName',
                    value: 'cookieContent'
                }));

                assert(done.calledOnce);
            }
        );
    }
);
