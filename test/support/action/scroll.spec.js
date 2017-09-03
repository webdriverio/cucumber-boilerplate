import scroll from 'src/support/action/scroll';

describe('scroll', () => {
    beforeEach(() => {
        global.browser = {
            scroll: jest.fn(),
        };
    });

    it('should call scroll on the browser object', () => {
        scroll('element');

        expect(global.browser.scroll).toHaveBeenCalledTimes(1);
        expect(global.browser.scroll).toHaveBeenCalledWith('element');
    });
});
