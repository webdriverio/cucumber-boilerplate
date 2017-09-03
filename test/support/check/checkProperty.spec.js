import checkProperty from 'src/support/check/checkProperty';

describe('checkProperty', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getCssProperty: jest.fn(() => {}),
            getAttribute: jest.fn(() => 'element-name'),
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
    });

    it('Should test if the element has the correct color', () => {
        global.browser.getCssProperty.mockReturnValueOnce({
            value: 'black',
        });

        checkProperty(true, 'color', '#elem1', false, 'black');

        _expect(global.browser.getCssProperty).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCssProperty)
            .toHaveBeenCalledWith(
                '#elem1',
                'color'
            );

        _expect(global.browser.getAttribute).not.toHaveBeenCalled();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'black',
                'CSS attribute of element "#elem1" should not ' +
                'contain "black", but "black"'
            );
    });

    it('Should test if the element does not have a width of 1px', () => {
        global.browser.getCssProperty.mockReturnValueOnce('1px');

        checkProperty(true, 'width', '#elem2', true, '1px');

        _expect(global.browser.getCssProperty).toHaveBeenCalledTimes(1);
        _expect(global.browser.getCssProperty)
            .toHaveBeenCalledWith(
                '#elem2',
                'width'
            );

        _expect(global.browser.getAttribute).not.toHaveBeenCalled();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                '1px',
                'CSS attribute of element "#elem2" should not ' +
                'contain "1px"'
            );
    });

    it('Should test if the element has the correct name', () => {
        checkProperty(
            false,
            'name',
            '#elem3',
            false,
            'element-name'
        );

        _expect(global.browser.getAttribute).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAttribute)
            .toHaveBeenCalledWith(
                '#elem3',
                'name'
            );

        _expect(global.browser.getCssProperty).not.toHaveBeenCalled();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            'element-name',
            'Attribute of element "#elem3" should not contain ' +
            '"element-name", but "element-name"'
        );
    });
});
