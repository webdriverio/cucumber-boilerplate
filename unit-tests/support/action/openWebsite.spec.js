const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const openWebsite = require('../../../test/support/action/openWebsite');

describe(
    'openWebsite', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                url: sinon.mock(),
                options: {
                    baseUrl: 'http://mysite.com'
                }
            };

            done = sinon.mock();
        });

        it(
            'should call url with the given url if the first param is `url`',
            () => {
                openWebsite('url', 'http://example.com', done);

                assert(global.browser.url.calledOnce);
                assert(global.browser.url.calledWith('http://example.com'));

                assert(done.calledOnce);
            }
        );

        it(
            'should call url with the given path on the baseUrl if the first ' +
            'param is `site`',
            () => {
                openWebsite('site', '/path/to/page', done);

                assert(global.browser.url.calledOnce);
                assert(
                    global.browser.url.calledWith(
                        'http://mysite.com/path/to/page'
                    )
                );

                assert(done.calledOnce);
            }
        );
    }
);
