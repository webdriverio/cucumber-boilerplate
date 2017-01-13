import openWebsite from 'src/support/action/openWebsite';

describe(
    'openWebsite', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                url: jest.fn(),
                options: {
                    baseUrl: 'http://mysite.com',
                },
            };

            done = jest.fn();
        });

        it(
            'should call url with the given url if the first param is `url`',
            () => {
                openWebsite('url', 'http://example.com', done);

                expect(global.browser.url).toHaveBeenCalledTimes(1);
                expect(global.browser.url)
                    .toHaveBeenCalledWith('http://example.com');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call url with the given path on the baseUrl if the first ' +
            'param is `site`',
            () => {
                openWebsite('site', '/path/to/page', done);

                expect(global.browser.url).toHaveBeenCalledTimes(1);
                expect(global.browser.url)
                    .toHaveBeenCalledWith('http://mysite.com/path/to/page');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
