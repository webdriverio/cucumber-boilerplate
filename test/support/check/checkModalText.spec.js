import checkModalText from 'src/support/check/checkModalText';

describe('checkModalText', () => {
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
    });

    it('Should test if alertText contains the given value', () => {
        checkModalText('alertbox', false, 'test');

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'test',
                'Expected the text of alertbox not to equal ' +
                '"test", instead found "test"'
            );
    });

    it('Should test if alertText does not contain the given value', () => {
        checkModalText('confirmbox', true, 'test');

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                'test',
                'Expected the text of confirmbox not to equal ' +
                '"test"'
            );
    });

    it('Should test if alertText does not contain the given value', () => {
        global.browser.alertText = jest.fn(() => {
            throw new Error();
        });

        try {
            checkModalText('confirmbox', false, 'test');
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });
});
