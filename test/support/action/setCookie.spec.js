import setCookie from 'src/support/action/setCookie';

describe('setCookie', () => {
    beforeEach(() => {
        global.browser = {
            setCookie: jest.fn(),
        };
    });

    it('should call setCookie on the browser object', () => {
        setCookie('cookieName', 'cookieContent');

        expect(global.browser.setCookie).toHaveBeenCalledTimes(1);
        expect(global.browser.setCookie)
            .toHaveBeenCalledWith({
                name: 'cookieName',
                value: 'cookieContent',
            });
    });
});
