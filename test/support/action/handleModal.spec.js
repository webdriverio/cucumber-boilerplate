import handleModal from 'src/support/action/handleModal';

describe('handleModal', () => {
    beforeEach(() => {
        global.browser = {
            acceptAlert: jest.fn(),
            dismissAlert: jest.fn(),
            getAlertText: jest.fn(),
        };
    });

    it('should call acceptAlert on the browser to close a alertbox', async () => {
        await handleModal('accept', 'alertbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to close a confirmbox', async () => {
        await handleModal('accept', 'confirmbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to close a prompt', async () => {
        await handleModal('accept', 'prompt');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it('should call acceptAlert on the browser to dismiss a alertbox', async () => {
        await handleModal('dismiss', 'alertbox');

        expect(global.browser.acceptAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.dismissAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });

    it(
        'should call dismissAlert on the browser to dismiss a confirmbox',
        async () => {
            await handleModal('dismiss', 'confirmbox');

            expect(global.browser.dismissAlert).toHaveBeenCalledTimes(1);
            expect(global.browser.acceptAlert).not.toHaveBeenCalled();
            expect(global.browser.getAlertText).not.toHaveBeenCalled();
        }
    );

    it('should call dismissAlert on the browser to dismiss a prompt', async () => {
        await handleModal('dismiss', 'prompt');

        expect(global.browser.dismissAlert).toHaveBeenCalledTimes(1);
        expect(global.browser.acceptAlert).not.toHaveBeenCalled();
        expect(global.browser.getAlertText).not.toHaveBeenCalled();
    });
});
