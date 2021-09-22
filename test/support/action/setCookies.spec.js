import setCookie from 'src/support/action/setCookie';

describe('setCookie', () => {
    beforeEach(() => {
        global.browser = {
            setCookies: jest.fn(),
        };
    });

    it('should call setCookie on the browser object', async () => {
        await setCookie('cookieName', 'cookieContent');

        expect(global.browser.setCookies).toHaveBeenCalledTimes(1);
        expect(global.browser.setCookies)
            .toHaveBeenCalledWith({
                name: 'cookieName',
                value: 'cookieContent',
            });
    });
});
