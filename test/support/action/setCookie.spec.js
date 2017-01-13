import setCookie from 'src/support/action/setCookie';

describe(
    'setCookie', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                setCookie: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call setCookie on the browser object',
            () => {
                setCookie('cookieName', 'cookieContent', done);

                expect(global.browser.setCookie).toHaveBeenCalledTimes(1);
                expect(global.browser.setCookie)
                    .toHaveBeenCalledWith({
                        name: 'cookieName',
                        value: 'cookieContent',
                    });

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
