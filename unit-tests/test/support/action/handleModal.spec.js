import handleModal from 'src/support/action/handleModal';

describe(
    'handleModal', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                alertAccept: jest.fn(),
                alertDismiss: jest.fn(),
                alertText: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call alertAccept on the browser to close a alertbox',
            () => {
                handleModal('accept', 'alertbox', done);

                expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
                expect(global.browser.alertDismiss).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call alertAccept on the browser to close a confirmbox',
            () => {
                handleModal('accept', 'confirmbox', done);

                expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
                expect(global.browser.alertDismiss).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call alertAccept on the browser to close a prompt',
            () => {
                handleModal('accept', 'prompt', done);

                expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
                expect(global.browser.alertDismiss).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call alertAccept on the browser to dismiss a alertbox',
            () => {
                handleModal('dismiss', 'alertbox', done);

                expect(global.browser.alertAccept).toHaveBeenCalledTimes(1);
                expect(global.browser.alertDismiss).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call alertDismiss on the browser to dismiss a confirmbox',
            () => {
                handleModal('dismiss', 'confirmbox', done);

                expect(global.browser.alertDismiss).toHaveBeenCalledTimes(1);
                expect(global.browser.alertAccept).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call alertDismiss on the browser to dismiss a prompt',
            () => {
                handleModal('dismiss', 'prompt', done);

                expect(global.browser.alertDismiss).toHaveBeenCalledTimes(1);
                expect(global.browser.alertAccept).not.toHaveBeenCalled();
                expect(global.browser.alertText).not.toHaveBeenCalled();

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
