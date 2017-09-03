import handleModal from 'src/support/action/handleModal';

describe('handleModal', () => {
    beforeEach(() => {
        global.browser = {
            alertAccept: jest.fn(),
            alertDismiss: jest.fn(),
            alertText: jest.fn(),
        };
    });

    it('should call alertAccept on the browser to close a alertbox', () => {
        handleModal('accept', 'alertbox');

        expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
        expect(global.browser.alertDismiss).not.toHaveBeenCalled();
        expect(global.browser.alertText).not.toHaveBeenCalled();
    });

    it('should call alertAccept on the browser to close a confirmbox', () => {
        handleModal('accept', 'confirmbox');

        expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
        expect(global.browser.alertDismiss).not.toHaveBeenCalled();
        expect(global.browser.alertText).not.toHaveBeenCalled();
    });

    it('should call alertAccept on the browser to close a prompt', () => {
        handleModal('accept', 'prompt');

        expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
        expect(global.browser.alertDismiss).not.toHaveBeenCalled();
        expect(global.browser.alertText).not.toHaveBeenCalled();
    });

    it('should call alertAccept on the browser to dismiss a alertbox', () => {
        handleModal('dismiss', 'alertbox');

        expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
        expect(global.browser.alertDismiss).not.toHaveBeenCalled();
        expect(global.browser.alertText).not.toHaveBeenCalled();
    });

    it(
        'should call alertDismiss on the browser to dismiss a confirmbox',
        () => {
            handleModal('dismiss', 'confirmbox');

            expect(global.browser.alertDismiss).toHaveBeenCalledTimes(1);
            expect(global.browser.alertAccept).not.toHaveBeenCalled();
            expect(global.browser.alertText).not.toHaveBeenCalled();
        }
    );

    it('should call alertDismiss on the browser to dismiss a prompt', () => {
        handleModal('dismiss', 'prompt');

        expect(global.browser.alertDismiss).toHaveBeenCalledTimes(1);
        expect(global.browser.alertAccept).not.toHaveBeenCalled();
        expect(global.browser.alertText).not.toHaveBeenCalled();
    });
});
