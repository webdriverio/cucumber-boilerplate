import checkContainsText from 'src/support/check/checkContainsText';

describe(
    'checkContainsText', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                getText: jest.fn(() => 'text'),
                getValue: jest.fn(() => 'value'),
            };

            expectToEqual = jest.fn();
            expectToNotEqual = jest.fn();

            global.expect = jest.fn(() => ({
                to: {
                    equal: expectToEqual,
                    not: {
                        equal: expectToNotEqual,
                    },
                },
            }));

            done = jest.fn();
        });

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', 'text', done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', ' not', 'text', done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText(
                    'inputfield',
                    'element1',
                    'text',
                    done
                );

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToEqual).toHaveBeenCalledTimes(1);
                _expect(expectToEqual).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText(
                    'inputfield',
                    'element1',
                    ' not',
                    'text',
                    done
                );

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
                _expect(expectToNotEqual).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
