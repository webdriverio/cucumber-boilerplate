import isEnabled from 'src/support/check/isEnabled';

describe(
    'isEnabled', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                isEnabled: jest.fn(() => true),
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

        it('Should test if the element is enabled',
            () => {
                isEnabled('#elem1', false, done);

                _expect(global.browser.isEnabled).toHaveBeenCalledTimes(1);
                _expect(global.browser.isEnabled)
                    .toHaveBeenCalledWith('#elem1');

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem1" to be enabled'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should test if the element is not enabled',
            () => {
                isEnabled('#elem2', true, done);

                _expect(global.browser.isEnabled).toHaveBeenCalledTimes(1);
                _expect(global.browser.isEnabled)
                    .toHaveBeenCalledWith('#elem2');

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem2" not to be enabled'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
