import checkSelected from 'src/support/check/checkSelected';

let isSelectedMock;

describe('checkSelected', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isSelectedMock = jest.fn(() => Promise.resolve(true));
        global.$ = jest.fn().mockReturnValue({
            isSelected: isSelectedMock,
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

    it('Should test if the element is selected', async () => {
        await checkSelected('#elem1', false);

        _expect(isSelectedMock).toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            '"#elem1" should be selected'
        );
    });

    it('Should test if the element is not selected', async () => {
        await checkSelected('#elem2', true);

        _expect(isSelectedMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            '"#elem2" should not be selected'
        );
    });
});
