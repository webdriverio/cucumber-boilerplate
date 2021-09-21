import closeAllButFirstTab from 'src/support/action/closeAllButFirstTab';

describe('closeAllButFirstTab', () => {
    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn().mockResolvedValue([
                'one',
                'two',
                'three',
            ]),
            switchToWindow: jest.fn().mockResolvedValue({
                close: jest.fn().mockResolvedValue({}),
            }),
            closeWindow: jest.fn(),
        };
    });

    it('should call closeAllButFirstTab on the browser', async () => {
        await closeAllButFirstTab('');

        expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        expect(global.browser.switchToWindow).toHaveBeenCalledTimes(3);
    });
});
