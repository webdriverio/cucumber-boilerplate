import checkModalText from 'src/support/check/checkModalText';

describe(
    'checkModalText', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                alertText: jest.fn(() => 'test'),
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

            done = jest.fn();
        });

        it('Should test if alertText contains the given value', () => {
            checkModalText('alertbox', false, 'test', done);

            _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
            _expect(global.browser.alertText).toHaveBeenCalledWith();

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    'test',
                    'Expected the text of alertbox not to equal ' +
                    '"test", instead found "test"'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should test if alertText does not contain the given value', () => {
            checkModalText('confirmbox', true, 'test', done);

            _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
            _expect(global.browser.alertText).toHaveBeenCalledWith();

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    'test',
                    'Expected the text of confirmbox not to equal ' +
                    '"test"'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should test if alertText does not contain the given value', () => {
            global.browser.alertText = jest.fn(() => {
                throw new Error();
            });

            try {
                checkModalText('confirmbox', false, 'test', done);
            } catch (e) {
                _expect(e);
            }

            _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
            _expect(global.browser.alertText).toHaveBeenCalledWith();

            _expect(expectToEqual).not.toHaveBeenCalled();
            _expect(expectToNotEqual).not.toHaveBeenCalled();

            _expect(done).not.toHaveBeenCalled();
        });
    }
);
