import closeLastOpenedWindow from 'src/support/action/closeLastOpenedWindow';

describe('closeLastOpenedWindow', () => {
    beforeEach(() => {
        global.browser = {
            windowHandles: jest.fn(() => ({
                value: [
                    'one',
                    'two',
                    'three',
                ],
            })),
            window: jest.fn(),
            close: jest.fn(),
        };
    });

    it('should call closeLastOpenedWindow on the browser', () => {
        closeLastOpenedWindow('');

        expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);

        expect(global.browser.window).toHaveBeenCalledTimes(1);

        expect(global.browser.window).toHaveBeenCalledWith('three');

        expect(global.browser.close).toHaveBeenCalledTimes(1);
    });
});
