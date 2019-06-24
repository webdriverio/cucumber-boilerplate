import checkFocus from 'src/support/check/checkFocus';

let hasFocusMock;

describe('checkFocus', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        hasFocusMock = jest.fn(() => true);
        global.$ = jest.fn().mockReturnValue({
            isFocused: hasFocusMock,
        });

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

    it('Should test if the element has focus', () => {
        checkFocus('element1', false);

        _expect(hasFocusMock).toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            'Expected element to be focused, but it is not'
        );
    });

    it('Should test if the element does not have the focus', () => {
        checkFocus('element1', true);

        _expect(hasFocusMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            'Expected element to not be focused, but it is'
        );
    });
});
