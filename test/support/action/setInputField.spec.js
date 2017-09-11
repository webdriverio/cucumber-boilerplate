import setInputField from 'src/support/action/setInputField';

describe('setInputField', () => {
    let expectToHaveLengthOf;
    let expectToHaveLengthOfAtLeast;

    beforeEach(() => {
        global.browser = {
            addValue: jest.fn(),
            setValue: jest.fn(),
            elements: jest.fn(() => ({
                value: ['1'],
            })).mockImplementationOnce(() => ({
                value: [],
            })).mockImplementationOnce(() => ({
                value: ['1', '2'],
            })),
        };

        expectToHaveLengthOf = jest.fn();
        expectToHaveLengthOfAtLeast = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                have: {
                    length: {
                        of: {
                            at: {
                                least: expectToHaveLengthOfAtLeast,
                            },
                        },
                    },
                    lengthOf: expectToHaveLengthOf,
                },
            },
        }));
    });

    it('should fail if the element is not on the page', () => {
        setInputField('add', 'value', 'element');

        _expect(global.browser.addValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.addValue)
            .toHaveBeenCalledWith('element', 'value');

        _expect(global.browser.setValue).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist ' +
            'exactly 1 time(s)'
        );
    });

    it('should fail if there is more than 1 element on the page', () => {
        setInputField('add', 'value', 'element');

        _expect(global.browser.addValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.addValue)
            .toHaveBeenCalledWith('element', 'value');

        _expect(global.browser.setValue).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist ' +
            'exactly 1 time(s)'
        );
    });

    it('should be able to add a value to an element', () => {
        setInputField('add', 'value', 'element');

        _expect(global.browser.addValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.addValue)
            .toHaveBeenCalledWith('element', 'value');

        _expect(global.browser.setValue).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist ' +
            'exactly 1 time(s)'
        );
    });

    it('should be able to set the value of an element', () => {
        setInputField('set', 'value', 'element');

        _expect(global.browser.setValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.setValue)
            .toHaveBeenCalledWith('element', 'value');

        _expect(global.browser.addValue).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist ' +
            'exactly 1 time(s)'
        );
    });

    it('should be able to set an empty value of an element', () => {
        setInputField('set', '', 'element');

        _expect(global.browser.setValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.setValue)
            .toHaveBeenCalledWith('element', '');

        _expect(global.browser.addValue).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist ' +
            'exactly 1 time(s)'
        );
    });
});
