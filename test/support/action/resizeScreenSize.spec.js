import setWindowSize from 'src/support/action/setWindowSize';

describe('setWindowSize', () => {
    beforeEach(() => {
        global.browser = {
            setWindowSize: jest.fn(),
        };
    });

    it('should call setWindowSize on the browser object', async () => {
        await setWindowSize(1, 2);

        expect(global.browser.setWindowSize)
            .toHaveBeenCalledTimes(1);
        expect(global.browser.setWindowSize)
            .toHaveBeenCalledWith(1, 2);
    });
});
