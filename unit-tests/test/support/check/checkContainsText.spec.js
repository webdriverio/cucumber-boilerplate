import checkContainsText from 'src/support/check/checkContainsText';

describe(
    'checkContainsText', () => {
        let done;
        let expectToBeEmptyStub;
        let expectToNotBeEmptyStub;

        beforeEach(() => {
            global.browser = {
                getText: jest.fn(() => 'text'),
                getValue: jest.fn(() => 'value'),
            };

            expectToBeEmptyStub = jest.fn();
            expectToNotBeEmptyStub = jest.fn();

            global.expect = jest.fn(() => ({
                to: {
                    be: {
                        empty: expectToBeEmptyStub,
                    },
                    not: {
                        be: {
                            empty: expectToNotBeEmptyStub,
                        },
                    },
                },
            }));

            done = jest.fn();
        });

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', false, done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToBeEmptyStub).toHaveBeenCalledTimes(1);
                _expect(expectToBeEmptyStub).toHaveBeenCalledWith();

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', true, done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToNotBeEmptyStub).toHaveBeenCalledTimes(1);
                _expect(expectToNotBeEmptyStub).toHaveBeenCalledWith();

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('inputfield', 'element1', false, done);

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToBeEmptyStub).toHaveBeenCalledTimes(1);
                _expect(expectToBeEmptyStub).toHaveBeenCalledWith();

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('inputfield', 'element1', true, done);

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToNotBeEmptyStub).toHaveBeenCalledTimes(1);
                _expect(expectToNotBeEmptyStub).toHaveBeenCalledWith();

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
