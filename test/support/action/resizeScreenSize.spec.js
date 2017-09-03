import resizeScreenSize from 'src/support/action/resizeScreenSize';

describe('resizeScreenSize', () => {
    beforeEach(() => {
        global.browser = {
            windowHandleSize: jest.fn(),
        };
    });

    it('should call windowHandleSize on the browser object', () => {
        resizeScreenSize(1, 2);

        expect(global.browser.windowHandleSize)
            .toHaveBeenCalledTimes(1);
        expect(global.browser.windowHandleSize)
            .toHaveBeenCalledWith({
                width: 1,
                height: 2,
            });
    });
});
