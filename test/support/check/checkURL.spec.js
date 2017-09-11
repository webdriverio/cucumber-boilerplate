import checkURL from 'src/support/check/checkURL';

describe('checkURL', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            url: jest.fn(() => ({
                value: 'http://www.example.com/test',
            })),
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

    it('Should test if the current URL matches the expected value', () => {
        checkURL(false, 'http://www.example.com/test');

        _expect(global.browser.url).toHaveBeenCalledTimes(1);
        _expect(global.browser.url).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'http://www.example.com/test',
                'expected url to be "http://www.example.com/test" ' +
                'but found "http://www.example.com/test"'
            );
    });

    it(
        'Should test if the current URL doesn\'t match the expected value',
        () => {
            checkURL(true, 'http://www.example.com/test');

            _expect(global.browser.url).toHaveBeenCalledTimes(1);
            _expect(global.browser.url).toHaveBeenCalledWith();

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    'http://www.example.com/test',
                    'expected url not to be "http://www.example.com/test"'
                );
        }
    );
});
