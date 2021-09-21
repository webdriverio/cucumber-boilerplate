import checkModalText from 'src/support/check/checkModalText';

describe('checkModalText', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getAlertText: jest.fn(() => Promise.resolve('test')),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toEqual: expectToNotEqual,
            },
            toEqual: expectToEqual,
        }));
    });

    it('Should test if getAlertText contains the given value', async () => {
        await checkModalText('alertbox', false, 'test');

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            'test',
            'Expected the text of alertbox to equal '
            + '"test", instead found "test"'
        );
    });

    it('Should test if getAlertText does not contain the given value', async () => {
        await checkModalText('confirmbox', true, 'test');

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            'test',
            'Expected the text of confirmbox not to equal '
            + '"test"'
        );
    });

    it('Should test if getAlertText does not contain the given value', async () => {
        global.browser.getAlertText = jest.fn(() => {
            throw new Error();
        });

        try {
            await checkModalText('confirmbox', false, 'test');
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });
});
