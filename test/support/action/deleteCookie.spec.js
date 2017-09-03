import deleteCookie from 'src/support/action/deleteCookie';

describe('deleteCookie', () => {
    beforeEach(() => {
        global.browser = {
            deleteCookie: jest.fn(),
        };
    });

    it('should call deleteCookie on the browser', () => {
        deleteCookie('test');

        expect(global.browser.deleteCookie).toHaveBeenCalledTimes(1);

        expect(global.browser.deleteCookie).toHaveBeenCalledWith('test');
    });
});
