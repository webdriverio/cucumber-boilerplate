import isDisplayed from 'src/support/check/isDisplayed';

let isDisplayedMock;

describe('isDisplayed', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isDisplayedMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            isDisplayed: isDisplayedMock,
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

    it('Should test if the element is visible', async () => {
        await isDisplayed('#elem1', false);

        _expect(isDisplayedMock).toHaveBeenCalled();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem1" to be displayed'
        );
    });

    it('Should test if the element is not visible', async () => {
        await isDisplayed('#elem2', true);

        _expect(isDisplayedMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem2" not to be displayed'
        );
    });
});
