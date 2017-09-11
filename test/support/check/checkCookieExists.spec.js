import checkCookieExists from 'src/support/check/checkCookieExists';

describe('checkCookieExists', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getCookie: jest.fn(),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                not: {
                    equal: expectToNotEqual,
                },
                equal: expectToEqual,
            },
        }));
    });

    it('Should succeed if a cookie was found with the given name', () => {
        global.browser.getCookie.mockReturnValueOnce({
            name: 'cookie1',
            value: 'value1',
        });

        checkCookieExists('cookie1', false);

        _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie1');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                null,
                'Expected cookie "cookie1" to exists but it does not'
            );
    });

    it('Should fail if no cookie was found with the given name', () => {
        global.browser.getCookie.mockReturnValueOnce(null);

        checkCookieExists('cookie2', true);

        _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie2');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                null,
                'Expected cookie "cookie2" not to exists but it does'
            );
    });
});
