import checkWithinViewport from 'src/support/check/checkWithinViewport';

describe(
    'checkWithinViewport', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                isVisibleWithinViewport: jest.fn(() => true),
            };

            browser.options = {
                baseisVisibleWithinViewport: 'http://www.example.com/',
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

        it('Should test if the element is visible within the viewport',
            () => {
                checkWithinViewport('#elem1', false, done);

                _expect(global.browser.isVisibleWithinViewport)
                    .toHaveBeenCalledTimes(1);
                _expect(global.browser.isVisibleWithinViewport)
                    .toHaveBeenCalledWith('#elem1');

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem1" to be inside the viewport'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it('Should test if the element is not visible within the viewport',
            () => {
                checkWithinViewport('#elem2', true, done);

                _expect(global.browser.isVisibleWithinViewport)
                    .toHaveBeenCalledTimes(1);
                _expect(global.browser.isVisibleWithinViewport)
                    .toHaveBeenCalledWith('#elem2');

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual)
                    .toHaveBeenCalledWith(
                        true,
                        'Expected element "#elem2" to be outside the viewport'
                    );

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
