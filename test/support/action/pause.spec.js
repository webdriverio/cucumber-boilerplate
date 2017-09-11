import pause from 'src/support/action/pause';

describe('pause', () => {
    beforeEach(() => {
        global.browser = {
            pause: jest.fn(),
        };
    });

    it('should call pause on the browser object', () => {
        pause(1000);

        expect(global.browser.pause).toHaveBeenCalledTimes(1);
        expect(global.browser.pause).toHaveBeenCalledWith(1000);
    });
});
