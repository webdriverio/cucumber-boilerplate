import checkURLPath from 'src/support/check/checkURLPath';

describe(
    'checkURLPath', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                url: jest.fn(() => ({
                    value: 'http://example.com/test',
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

        it('Should test if the URL path matches the given value',
            () => {
                checkURLPath(false, 'test', done);

                _expect(global.browser.url).toHaveBeenCalledTimes(1);
                _expect(global.browser.url).toHaveBeenCalledWith();

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual)
                    .toHaveBeenCalledWith(
                        'test',
                        'expected path to be "test" but found "/test"'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should test if the URL path does not match the given value',
            () => {
                checkURLPath(true, 'test', done);

                _expect(global.browser.url).toHaveBeenCalledTimes(1);
                _expect(global.browser.url).toHaveBeenCalledWith();

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        'test',
                        'expected path not to be "/test"'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should replace the domain from the current url',
            () => {
                global.browser.url.mockReturnValueOnce({
                    value: 'http://www.example.com/test',
                });

                checkURLPath(true, 'test', done);

                _expect(global.browser.url).toHaveBeenCalledTimes(1);
                _expect(global.browser.url).toHaveBeenCalledWith();

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        'test',
                        'expected path not to be "/test"'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
