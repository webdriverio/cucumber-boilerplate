import setInputField from 'src/support/action/setInputField';

describe(
    'setInputField', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                addValue: jest.fn(),
                setValue: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call addValue on the browser object',
            () => {
                setInputField('add', 'value', 'element', done);

                expect(global.browser.addValue).toHaveBeenCalledTimes(1);
                expect(global.browser.addValue)
                    .toHaveBeenCalledWith('element', 'value');

                expect(global.browser.setValue).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call setValue on the browser object',
            () => {
                setInputField('set', 'value', 'element', done);

                expect(global.browser.setValue).toHaveBeenCalledTimes(1);
                expect(global.browser.setValue)
                    .toHaveBeenCalledWith('element', 'value');

                expect(global.browser.addValue).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
