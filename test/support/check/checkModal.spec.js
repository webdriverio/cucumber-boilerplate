import checkModal from 'src/support/check/checkModal';

describe('checkModal', () => {
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

    it('Should test if alertbox is opened', async () => {
        global.browser.getAlertText = jest.fn(() => {
            throw new Error();
        });

        try {
            await checkModal('alertbox', false);
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            null,
            'A alertbox was not opened when it should have been'
        );
    });

    it('Should test if confirmbox is not opened', async () => {
        await checkModal('confirmbox', true);

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            null,
            'A confirmbox was opened when it shouldn\'t'
        );
    });

    it('Should test if alertbox is not opened', async () => {
        global.browser.getAlertText = jest.fn(() => {
            throw new Error();
        });

        try {
            await checkModal('alertbox', true);
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });

    it('Should test if confirmbox is opened', async () => {
        await checkModal('confirmbox', false);

        _expect(global.browser.getAlertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAlertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });
});
