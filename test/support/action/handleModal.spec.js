import handleModal from 'src/support/action/handleModal';

describe('handleModal', () => {
    beforeEach(() => {
        global.browser = {
            acceptAlert: jest.fn(),
            dismissAlert: jest.fn(),
            getAlertText: jest.fn(),
        };
    });

    it('should call acceptAlert on the browser to close a alertbox', () => {
        handleModal('accept', 'alertbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to close a confirmbox', () => {
        handleModal('accept', 'confirmbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to close a prompt', () => {
        handleModal('accept', 'prompt');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to dismiss a alertbox', () => {
        handleModal('dismiss', 'alertbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it(
        'should call dismissAlert on the browser to dismiss a confirmbox',
        () => {
            handleModal('dismiss', 'confirmbox');

            expect(global.browser.dismissAlert).toHaveBeenCalledTimes(1);
            expect(global.browser.acceptAlert).not.toHaveBeenCalled();
            expect(global.browser.getAlertText).not.toHaveBeenCalled();
        }
    );

    it('should call dismissAlert on the browser to dismiss a prompt', () => {
        handleModal('dismiss', 'prompt');

        expect(global.browser.dismissAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.acceptAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });
});
