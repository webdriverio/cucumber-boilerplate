import checkProperty from 'src/support/check/checkProperty';

let getCSSMock;
let getAttributeMock;

describe('checkProperty', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        getCSSMock = jest.fn(() => {
            // foo
        });
        getAttributeMock = jest.fn(() => Promise.resolve('element-name'));
        global.$ = jest.fn().mockReturnValue({
            getCSSProperty: getCSSMock,
            getAttribute: getAttributeMock,
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

    it('Should test if the element has the correct color', async () => {
        getCSSMock.mockReturnValueOnce({ value: 'black' });

        await checkProperty(true, 'color', '#elem1', false, 'black');

        _expect(getCSSMock).toHaveBeenCalledTimes(1);
        _expect(getCSSMock).toHaveBeenCalledWith('color');

        _expect(getAttributeMock).not.toHaveBeenCalled();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            'black',
            'CSS attribute: color of element "#elem1" should '
            + 'contain "black", but "black"'
        );
    });

    it('Should test if the element does not have a width of 1px', async () => {
        getCSSMock.mockReturnValueOnce('1px');

        await checkProperty(true, 'width', '#elem2', true, '1px');

        _expect(getCSSMock).toHaveBeenCalledTimes(1);
        _expect(getCSSMock).toHaveBeenCalledWith('width');

        _expect(getAttributeMock).not.toHaveBeenCalled();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            '1px',
            'CSS attribute: width of element "#elem2" should not '
            + 'contain "1px"'
        );
    });

    it('Should test if the element has the correct name', async () => {
        await checkProperty(
            false,
            'name',
            '#elem3',
            false,
            'element-name'
        );

        _expect(getAttributeMock).toHaveBeenCalledTimes(1);
        _expect(getAttributeMock).toHaveBeenCalledWith('name');

        _expect(getCSSMock).not.toHaveBeenCalled();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            'element-name',
            'Attribute: name of element "#elem3" should contain '
            + '"element-name", but "element-name"'
        );
    });
});
