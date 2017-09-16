import selectOption from 'src/support/action/selectOption';

describe('selectOption', () => {
    let selectByAttribute;
    let selectByValue;
    let selectByVisibleText;

    beforeEach(() => {
        selectByAttribute = jest.fn();
        selectByValue = jest.fn();
        selectByVisibleText = jest.fn();

        global.browser = {
            selectByAttribute,
            selectByValue,
            selectByVisibleText,
        };
    });

    it('should call selectByAttribute on the browser object', () => {
        selectOption('name', 'option1', 'element1');

        expect(selectByAttribute).toHaveBeenCalledTimes(1);
        expect(selectByAttribute)
            .toHaveBeenCalledWith('element1', 'name', 'option1');
    });

    it('should call selectByValue on the browser object', () => {
        selectOption('value', 'value1', 'element2');

        expect(selectByValue).toHaveBeenCalledTimes(1);
        expect(selectByValue)
            .toHaveBeenCalledWith('element2', 'value1');
    });

    it('should call selectByVisibleText on the browser object', () => {
        selectOption('text', 'text1', 'element3');

        expect(selectByVisibleText).toHaveBeenCalledTimes(1);
        expect(selectByVisibleText)
            .toHaveBeenCalledWith('element3', 'text1');
    });

    it('should throw an error when an unknown selection type is passed', () => {
        const spySelectOption = jest.fn(selectOption);

        expect(spySelectOption.bind(null, 'test', 'option1', 'element1'))
            .toThrow();
    });
});
