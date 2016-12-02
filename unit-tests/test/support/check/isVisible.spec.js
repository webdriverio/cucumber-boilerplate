import isVisible from 'src/support/check/isVisible';

describe(
    'isVisible', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                isVisible: jest.fn(() => true),
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

        it('Should test if the element is visible',
            () => {
                isVisible('#elem1', false, done);

                _expect(global.browser.isVisible).toHaveBeenCalled();
                _expect(global.browser.isVisible)
                    .toHaveBeenCalledWith('#elem1');

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem1" to be visible'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should test if the element is not visible',
            () => {
                isVisible('#elem2', true, done);

                _expect(global.browser.isVisible).toHaveBeenCalledTimes(1);
                _expect(global.browser.isVisible)
                    .toHaveBeenCalledWith('#elem2');

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem2" not to be visible'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
