import checkFocus from 'src/support/check/checkFocus';

describe(
    'checkFocus', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                hasFocus: jest.fn(() => true),
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

        it('Should test if the element has focus', () => {
            checkFocus('element1', false, done);

            _expect(global.browser.hasFocus).toHaveBeenCalledTimes(1);
            _expect(global.browser.hasFocus).toHaveBeenCalledWith('element1');

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    true,
                    'Expected element to be focused, but it is not'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should test if the element does not have the focus', () => {
            checkFocus('element1', true, done);

            _expect(global.browser.hasFocus).toHaveBeenCalledTimes(1);
            _expect(global.browser.hasFocus).toHaveBeenCalledWith('element1');

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    true,
                    'Expected element to not be focused, but it is'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
