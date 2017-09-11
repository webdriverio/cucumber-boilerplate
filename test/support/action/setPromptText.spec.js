import setPromptText from 'src/support/action/setPromptText';

describe('setPromptText', () => {
    beforeEach(() => {
        global.browser = {
            alertText: jest.fn(),
        };

        global.assert = jest.fn();
    });

    it('should call alertText on the browser object', () => {
        setPromptText('modalText');

        expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        expect(global.browser.alertText)
            .toHaveBeenCalledWith('modalText');
    });

    it('should call fail when no prompt is open', () => {
        const error = new Error();
        global.browser.alertText = jest.fn(() => {
            throw error;
        });

        setPromptText('modalText2');

        expect(global.browser.alertText).toHaveBeenCalledTimes(1);
        expect(global.browser.alertText)
            .toHaveBeenCalledWith('modalText2');
        expect(global.browser.alertText).toThrow();

        expect(global.assert).toHaveBeenCalledTimes(1);
        expect(global.assert)
            .toHaveBeenCalledWith(
                error,
                'A prompt was not open when it should have been open'
            );
    });
});
