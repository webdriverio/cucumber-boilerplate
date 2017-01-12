import checkContent from 'src/support/check/checkContainsAnyText';

describe(
    'checkContent', () => {
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

        it('Should handle input fields', () => {
            checkContent('inputfield', 'element1', false, done);

            _expect(global.browser.getText).not.toHaveBeenCalledTimes(1);

            _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
            _expect(global.browser.getValue).toHaveBeenCalledWith('element1');

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith('');

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should handle elements', () => {
            checkContent('element', 'element2', false, done);

            _expect(global.browser.getText).toHaveBeenCalledTimes(1);
            _expect(global.browser.getText).toHaveBeenCalledWith('element2');

            _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual).toHaveBeenCalledWith('');

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Handle the false case', () => {
            checkContent('element', 'element3', true, done);

            _expect(global.browser.getText).toHaveBeenCalledTimes(1);
            _expect(global.browser.getText).toHaveBeenCalledWith('element3');

            _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual).toHaveBeenCalledWith('');

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('should handle no expected text and no falsecase', () => {
            checkContent('element', 'element4', done);

            _expect(global.browser.getText).toHaveBeenCalledTimes(1);
            _expect(global.browser.getText).toHaveBeenCalledWith('element4');

            _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual).toHaveBeenCalledWith('');

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
