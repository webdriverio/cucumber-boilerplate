import checkURL from 'src/support/check/checkURL';

describe(
    'checkURL', () => {
        let done;
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

            done = jest.fn();
        });

        it('Should test if the current URL matches the expected value',
            () => {
                checkURL(false, 'http://www.example.com/test', done);

                _expect(global.browser.url).toHaveBeenCalledTimes(1);
                _expect(global.browser.url).toHaveBeenCalledWith();

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual)
                    .toHaveBeenCalledWith(
                        'http://www.example.com/test',
                        'expected url to be "http://www.example.com/test" ' +
                        'but found "http://www.example.com/test"'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should test if the current URL does not match the expected value',
            () => {
                checkURL(true, 'http://www.example.com/test', done);

                _expect(global.browser.url).toHaveBeenCalledTimes(1);
                _expect(global.browser.url).toHaveBeenCalledWith();

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        'http://www.example.com/test',
                        'expected url not to be "http://www.example.com/test"'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
