import selectOption from 'src/support/action/selectOption';

describe(
    'selectOption', () => {
        let done;
        let selectByAttribute;
        let selectByValue;
        let selectByVisibleText;

        beforeEach(() => {
            selectByAttribute = jest.fn();
            selectByValue = jest.fn();
            selectByVisibleText = jest.fn();

            global.browser = {
                element: jest.fn(() => ({
                    selectByAttribute,
                    selectByValue,
                    selectByVisibleText,
                })),
            };

            done = jest.fn();
        });

        it(
            'should call selectByAttribute on the browser object',
            () => {
                selectOption('name', 'option1', 'element1', done);

                expect(global.browser.element).toHaveBeenCalledTimes(1);
                expect(global.browser.element).toHaveBeenCalledWith('element1');

                expect(selectByAttribute).toHaveBeenCalledTimes(1);
                expect(selectByAttribute)
                    .toHaveBeenCalledWith('element1', 'name', 'option1');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call selectByValue on the browser object',
            () => {
                selectOption('value', 'value1', 'element2', done);

                expect(global.browser.element).toHaveBeenCalledTimes(1);
                expect(global.browser.element).toHaveBeenCalledWith('element2');

                expect(selectByValue).toHaveBeenCalledTimes(1);
                expect(selectByValue)
                    .toHaveBeenCalledWith('element2', 'value1');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call selectByVisibleText on the browser object',
            () => {
                selectOption('text', 'text1', 'element3', done);

                expect(global.browser.element).toHaveBeenCalledTimes(1);
                expect(global.browser.element).toHaveBeenCalledWith('element3');

                expect(selectByVisibleText).toHaveBeenCalledTimes(1);
                expect(selectByVisibleText)
                    .toHaveBeenCalledWith('element3', 'text1');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should throw an error when an unknown selection type is passed',
            () => {
                const spySelectOption = jest.fn(selectOption);

                expect(
                    spySelectOption
                        .bind(null, 'test', 'option1', 'element1', done)
                ).toThrow();

                expect(global.browser.element).toHaveBeenCalledTimes(1);
                expect(global.browser.element).toHaveBeenCalledWith('element1');

                expect(done).not.toHaveBeenCalled();
            }
        );
    }
);
