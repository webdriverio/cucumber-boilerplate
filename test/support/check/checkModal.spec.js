import checkModal from 'src/support/check/checkModal';

describe('checkModal', () => {
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

    it('Should test if alertbox is opened', () => {
        global.browser.alertText = jest.fn(() => {
            throw new Error();
        });

        try {
            checkModal('alertbox', false);
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            null,
            'A alertbox was not opened when it should have been'
        );
    });

    it('Should test if confirmbox is not opened', () => {
        checkModal('confirmbox', true);

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            null,
            'A confirmbox was opened when it shouldn\'t'
        );
    });

    it('Should test if alertbox is not opened', () => {
        global.browser.alertText = jest.fn(() => {
            throw new Error();
        });

        try {
            checkModal('alertbox', true);
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });

    it('Should test if confirmbox is opened', () => {
        checkModal('confirmbox', false);

        _expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        _expect(global.browser.alertText).toHaveBeenCalledWith();

        _expect(expectToEqual).not.toHaveBeenCalled();
        _expect(expectToNotEqual).not.toHaveBeenCalled();
    });
});
