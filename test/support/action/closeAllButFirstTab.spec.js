import closeAllButFirstTab from 'src/support/action/closeAllButFirstTab';

describe('closeAllButFirstTab', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn(() => [
                'one',
                'two',
                'three',
            ]),
            switchToWindow: jest.fn(() => ({
                close() {
                    // foo
                },
            })),
            closeWindow: jest.fn(),
        };
    });

    it('should call closeAllButFirstTab on the browser', () => {
        closeAllButFirstTab('');

        expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);

        expect(global.browser.switchToWindow).toHaveBeenCalledTimes(3);
    });
});
