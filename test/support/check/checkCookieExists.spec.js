import checkCookieExists from 'src/support/check/checkCookieExists';

describe('checkCookieExists', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getCookies: jest.fn(),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toHaveLength: expectToNotEqual,
            },
            toHaveLength: expectToEqual,
        }));
    });

    it('Should succeed if a cookie was found with the given name', async () => {
        global.browser.getCookies.mockResolvedValueOnce({
            name: 'cookie1',
            value: 'value1',
        });

        await checkCookieExists('cookie1', false);

        _expect(global.browser.getCookies).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookies).toHaveBeenCalledWith('cookie1');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            0,
            'Expected cookie "cookie1" to exists but it does not'
        );
    });

    it('Should fail if no cookie was found with the given name', async () => {
        global.browser.getCookies.mockResolvedValueOnce([]);

        await checkCookieExists('cookie2', true);

        _expect(global.browser.getCookies).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookies).toHaveBeenCalledWith('cookie2');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            0,
            'Expected cookie "cookie2" not to exists but it does'
        );
    });
});
