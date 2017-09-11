import waitForVisible from 'src/support/action/waitForVisible';

describe('waitForVisible', () => {
    beforeEach(() => {
        global.browser = {
            waitForVisible: jest.fn(),
        };
    });

    it('should call waitForVisible on the browser object', () => {
        waitForVisible('element', true);

        expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForVisible)
            .toHaveBeenCalledWith('element', 10000, true);
    });

    it('should call waitForVisible on the browser object', () => {
        waitForVisible('element', false);

        expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
        expect(global.browser.waitForVisible)
            .toHaveBeenCalledWith('element', 10000, false);
    });
});
