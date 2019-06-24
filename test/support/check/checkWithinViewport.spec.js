import checkWithinViewport from 'src/support/check/checkWithinViewport';

let isDisplayedInViewportMock;

describe('checkWithinViewport', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isDisplayedInViewportMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            isDisplayedInViewport: isDisplayedInViewportMock,
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

    it('Should test if the element is visible within the viewport', () => {
        checkWithinViewport('#elem1', false);

        _expect(isDisplayedInViewportMock)
            .toHaveBeenCalledTimes(1);
        _expect(global.$)
            .toHaveBeenCalledWith('#elem1');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem1" to be inside the viewport'
        );
    });

    it('Should test if the element is not visible within the viewport', () => {
        checkWithinViewport('#elem2', true);

        _expect(isDisplayedInViewportMock).toHaveBeenCalledTimes(1);
        _expect(global.$).toHaveBeenCalledWith('#elem2');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem2" to be outside the viewport'
        );
    });
});
