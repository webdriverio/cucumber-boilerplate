import setPromptText from 'src/support/action/setPromptText';

describe('setPromptText', () => {
    beforeEach(() => {
        global.browser = {
            sendAlertText: jest.fn(),
        };

        global.assert = jest.fn();
    });

    it('should call getAlertText on the browser object', () => {
        setPromptText('modalText');

        expect(global.browser.sendAlertText).toHaveBeenCalledTimes(1);
        expect(global.browser.sendAlertText)
            .toHaveBeenCalledWith('modalText');
    });

    it('should call fail when no prompt is open', () => {
        const error = new Error();
        global.browser.sendAlertText = jest.fn(() => {
            throw error;
        });

        setPromptText('modalText2');

        expect(global.browser.sendAlertText).toHaveBeenCalledTimes(1);
        expect(global.browser.sendAlertText)
            .toHaveBeenCalledWith('modalText2');
        expect(global.browser.sendAlertText).toThrow();

        expect(global.assert).toHaveBeenCalledTimes(1);
        expect(global.assert)
            .toHaveBeenCalledWith(
                error,
                'A prompt was not open when it should have been open'
            );
    });
});
