import focusLastOpenedWindow from 'src/support/action/focusLastOpenedWindow';

describe('focusLastOpenedWindow', () => {
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
        };
    });

    it('should call focusLastOpenedWindow on the browser', () => {
        focusLastOpenedWindow('');

        expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);

        expect(global.browser.window).toHaveBeenCalledTimes(1);

        expect(global.browser.window).toHaveBeenCalledWith('three');
    });
});
