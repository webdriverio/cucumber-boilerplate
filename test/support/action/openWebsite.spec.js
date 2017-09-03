import openWebsite from 'src/support/action/openWebsite';

describe('openWebsite', () => {
    beforeEach(() => {
        global.browser = {
            url: jest.fn(),
            options: {
                baseUrl: 'http://mysite.com',
            },
        };
    });

    it('should call url with the given url if the first param is `url`', () => {
        openWebsite('url', 'http://example.com');

        expect(global.browser.url).toHaveBeenCalledTimes(1);
        expect(global.browser.url)
            .toHaveBeenCalledWith('http://example.com');
    });

    it(
        'should call url with the given path on the baseUrl if the first ' +
        'param is `site`',
        () => {
            openWebsite('site', '/path/to/page');

            expect(global.browser.url).toHaveBeenCalledTimes(1);
            expect(global.browser.url)
                .toHaveBeenCalledWith('http://mysite.com/path/to/page');
        }
    );
});
