import deleteCookies from 'src/support/action/deleteCookies';

describe('deleteCookies', () => {
    beforeEach(() => {
        global.browser = {
            deleteCookies: jest.fn(),
        };
    });

    it('should call deleteCookies on the browser', () => {
        deleteCookies('test');

        expect(global.browser.deleteCookies).toHaveBeenCalledTimes(1);

        expect(global.browser.deleteCookies).toHaveBeenCalledWith('test');
    });
});
