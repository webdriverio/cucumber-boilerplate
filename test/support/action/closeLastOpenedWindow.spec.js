import closeLastOpenedWindow from 'src/support/action/closeLastOpenedWindow';

describe('closeLastOpenedWindow', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn(() => [
                'one',
                'two',
                'three',
            ]),
            getWindowHandle: jest.fn(() => 'three'),
            switchToWindow: jest.fn(),
            closeWindow: jest.fn(),
        };
    });

    describe('when focused on the last opened window', () => {
        it('should call closeLastOpenedWindow on the browser', () => {
            closeLastOpenedWindow('');

            expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);

            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(0);

            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });
    });

    describe('when NOT focused on the last opened window', () => {
        beforeEach(() => {
            global.browser.getWindowHandle = jest.fn(() => 'two');
        });

        it('should switch to the last opened window', () => {
            closeLastOpenedWindow('');

            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(2);

            expect(global.browser.switchToWindow).toHaveBeenCalledWith('three');

            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });

        it('should switch back to the last focused window', () => {
            closeLastOpenedWindow('');

            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(2);

            expect(global.browser.switchToWindow).toHaveBeenCalledWith('two');

            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });
    });
});
