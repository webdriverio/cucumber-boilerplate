import deleteCookie from 'src/support/action/deleteCookie';

describe(
    'deleteCookie', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                deleteCookie: jest.fn(),
            };

            done = jest.fn();
        });

        it('should call deleteCookie on the browser', () => {
            deleteCookie('test', done);

            expect(global.browser.deleteCookie).toHaveBeenCalledTimes(1);

            expect(global.browser.deleteCookie).toHaveBeenCalledWith('test');

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
