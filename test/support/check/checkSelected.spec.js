import checkSelected from 'src/support/check/checkSelected';

let isSelectedMock;

describe('checkSelected', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isSelectedMock = jest.fn(() => true);
        global.$ = jest.fn().mockReturnValue({
            isSelected: isSelectedMock,
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

    it('Should test if the element is selected', () => {
        checkSelected('#elem1', false);

        _expect(isSelectedMock).toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            '"#elem1" should be selected'
        );
    });

    it('Should test if the element is not selected', () => {
        checkSelected('#elem2', true);

        _expect(isSelectedMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            '"#elem2" should not be selected'
        );
    });
});
