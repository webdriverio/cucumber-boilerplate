import closeLastOpenedWindow from 'src/support/action/closeLastOpenedWindow';

describe('closeLastOpenedWindow', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn(() => [
                'one',
                'two',
                'three',
            ]),
            switchToWindow: jest.fn(),
            closeWindow: jest.fn(),
        };
    });

    it('should call closeLastOpenedWindow on the browser', () => {
        closeLastOpenedWindow('');

        expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);

        expect(global.browser.switchToWindow).toHaveBeenCalledTimes(1);

        expect(global.browser.switchToWindow).toHaveBeenCalledWith('three');

        expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
    });
});
