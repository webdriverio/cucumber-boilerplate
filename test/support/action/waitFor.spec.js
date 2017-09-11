import waitFor from 'src/support/action/waitFor';

describe('waitFor', () => {
    beforeEach(() => {
        global.browser = {
            waitForExist: jest.fn(),
            waitForSelected: jest.fn(),
            waitForEnabled: jest.fn(),
            waitForVisible: jest.fn(),
            waitForText: jest.fn(),
            waitForValue: jest.fn(),
        };
    });

    it('should call waitForExist on the browser object', () => {
        waitFor('element', 1, undefined, '');

        expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForExist)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForExist on the browser object', () => {
        waitFor('element', 1, false, '');

        expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForExist)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForExist on the browser object', () => {
        waitFor('element', 1, true, '');

        expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForExist)
            .toHaveBeenCalledWith('element', 1, true);
    });

    it('should use a default value for the timeout', () => {
        waitFor('element', 0, false, '');

        expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForExist)
            .toHaveBeenCalledWith('element', 3000, false);
    });

    it('should call waitForSelected on the browser object', () => {
        waitFor('element', 1, false, 'be checked');

        expect(global.browser.waitForSelected).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForSelected)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForEnabled on the browser object', () => {
        waitFor('element', 1, false, 'be enabled');

        expect(global.browser.waitForEnabled).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForEnabled)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForSelected on the browser object', () => {
        waitFor('element', 1, false, 'be selected');

        expect(global.browser.waitForSelected).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForSelected)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForVisible on the browser object', () => {
        waitFor('element', 1, false, 'be visible');

        expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForVisible)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForText on the browser object', () => {
        waitFor('element', 1, false, 'contain a text');

        expect(global.browser.waitForText).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForText)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForValue on the browser object', () => {
        waitFor('element', 1, false, 'contain a value');

        expect(global.browser.waitForValue).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForValue)
            .toHaveBeenCalledWith('element', 1, false);
    });

    it('should call waitForExist on the browser object', () => {
        waitFor('element', 1, false, 'exist');

        expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForExist)
            .toHaveBeenCalledWith('element', 1, false);
    });
});
