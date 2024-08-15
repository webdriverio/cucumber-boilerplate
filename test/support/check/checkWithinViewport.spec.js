import checkWithinViewport from 'src/support/check/checkWithinViewport';

let isDisplayed;

describe('checkWithinViewport', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isDisplayed = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            isDisplayed,
        });

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toEqual: expectToNotEqual,
            },
            toEqual: expectToEqual,
        }));
    });

    it('Should test if the element is visible within the viewport', async () => {
        await checkWithinViewport('#elem1', false);

        _expect(isDisplayed)
            .toHaveBeenCalledTimes(1);
        _expect(isDisplayed)
            .toHaveBeenCalledWith(_expect.objectContaining({ withinViewport: true }));
        _expect(global.$)
            .toHaveBeenCalledWith('#elem1');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem1" to be inside the viewport'
        );
    });

    it('Should test if the element is not visible within the viewport', async () => {
        await checkWithinViewport('#elem2', true);

        _expect(isDisplayed).toHaveBeenCalledTimes(1);
        _expect(isDisplayed)
            .toHaveBeenCalledWith(_expect.objectContaining({ withinViewport: true }));
        _expect(global.$).toHaveBeenCalledWith('#elem2');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem2" to be outside the viewport'
        );
    });
});
