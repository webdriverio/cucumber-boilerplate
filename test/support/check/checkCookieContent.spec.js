import checkCookieContent from 'src/support/check/checkCookieContent';

describe('checkCookieContent', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getCookie: jest.fn(() => ({
                name: 'cookie1',
                value: 'value1',
            })),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                equal: expectToEqual,
                not: {
                    equal: expectToNotEqual,
                },
            },
        }));
    });

    it('Should fail if no cookie was found with the given name', () => {
        checkCookieContent('cookie2', true, '');

        _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie2');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'cookie2',
                'no cookie found with the name "cookie2"'
            );
    });

    it('Handle the false case', () => {
        checkCookieContent('cookie1', true, 'value2');

        _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie1');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                'value2',
                'expected cookie "cookie1" not to have value "value2"'
            );
    });

    it('Should be able to validated against an expected string', () => {
        checkCookieContent('cookie1', false, 'value2');

        _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie1');

        _expect(expectToEqual).toHaveBeenCalledTimes(2);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'value2',
                'expected cookie "cookie1" to have value "value2" but got' +
                ' "value1"'
            );
    });
});
