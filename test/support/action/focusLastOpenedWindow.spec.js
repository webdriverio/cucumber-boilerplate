import focusLastOpenedWindow from 'src/support/action/focusLastOpenedWindow';

describe('focusLastOpenedWindow', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn().mockResolvedValue([
                'one',
                'two',
                'three',
            ]),
            switchToWindow: jest.fn(),
        };
    });

    it('should call focusLastOpenedWindow on the browser', async () => {
        await focusLastOpenedWindow('');

        expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        expect(global.browser.switchToWindow).toHaveBeenCalledTimes(1);
        expect(global.browser.switchToWindow).toHaveBeenCalledWith('three');
    });
});
