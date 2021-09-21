import closeLastOpenedWindow from 'src/support/action/closeLastOpenedWindow';

describe('closeLastOpenedWindow', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn().mockResolvedValue([
                'one',
                'two',
                'three',
            ]),
            getWindowHandle: jest.fn().mockResolvedValue('three'),
            switchToWindow: jest.fn().mockResolvedValue({}),
            closeWindow: jest.fn().mockResolvedValue({}),
        };
    });

    describe('when focused on the last opened window', () => {
        it('should call closeLastOpenedWindow on the browser', async () => {
            await closeLastOpenedWindow('');

            expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(0);
            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });
    });

    describe('when NOT focused on the last opened window', () => {
        beforeEach(() => {
            global.browser.getWindowHandle = jest.fn(() => 'two');
        });

        it('should switch to the last opened window', async () => {
            await closeLastOpenedWindow('');

            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(2);
            expect(global.browser.switchToWindow).toHaveBeenCalledWith('three');
            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });

        it('should switch back to the last focused window', async () => {
            await closeLastOpenedWindow('');

            expect(global.browser.switchToWindow).toHaveBeenCalledTimes(2);
            expect(global.browser.switchToWindow).toHaveBeenCalledWith('two');
            expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        });
    });
});
