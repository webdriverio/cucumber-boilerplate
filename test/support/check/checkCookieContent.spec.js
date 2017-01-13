import checkCookieContent from 'src/support/check/checkCookieContent';

describe(
    'checkCookieContent', () => {
        let done;
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

            done = jest.fn();
        });

        it('Should fail if no cookie was found with the given name', () => {
            checkCookieContent('cookie2', true, '', done);

            _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
            _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie2');

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    'cookie2',
                    'no cookie found with the name "cookie2"'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Handle the false case', () => {
            checkCookieContent('cookie1', true, 'value2', done);

            _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
            _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie1');

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    'value2',
                    'expected cookie "cookie1" not to have value "value2"'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should be able to validated against an expected string', () => {
            checkCookieContent('cookie1', false, 'value2', done);

            _expect(global.browser.getCookie).toHaveBeenCalledTimes(1);
            _expect(global.browser.getCookie).toHaveBeenCalledWith('cookie1');

            _expect(expectToEqual).toHaveBeenCalledTimes(2);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    'value2',
                    'expected cookie "cookie1" to have value "value2" but got' +
                    ' "value1"'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
