import selectOption from 'src/support/action/selectOption';

describe('selectOption', () => {
    let selectByAttribute;
    let selectByValue;
    let selectByVisibleText;

    beforeEach(() => {
        selectByAttribute = jest.fn();
        selectByValue = jest.fn();
        selectByVisibleText = jest.fn();

        global.$ = jest.fn().mockReturnValue({
            selectByAttribute,
            selectByValue,
            selectByVisibleText,
        });
    });

    it('should call selectByAttribute on the browser object', async () => {
        await selectOption('name', 'option1', 'element1');

        expect(selectByAttribute).toHaveBeenCalledTimes(1);
        expect(selectByAttribute).toHaveBeenCalledWith('name', 'option1');
    });

    it('should call selectByValue on the browser object', async () => {
        await selectOption('value', 'value1', 'element2');

        expect(selectByAttribute).toHaveBeenCalledTimes(1);
        expect(selectByAttribute).toHaveBeenCalledWith('value', 'value1');
    });

    it('should call selectByText on the browser object', async () => {
        await selectOption('text', 'text1', 'element3');

        expect(selectByVisibleText).toHaveBeenCalledTimes(1);
        expect(selectByVisibleText).toHaveBeenCalledWith('text1');
    });

    it('should throw an error when an unknown selection type is passed', async () => {
        await expect(selectOption('test', 'option1', 'element1'))
            .rejects.toEqual(new Error('Unknown selection type "test"'));
    });
});
