import pause from 'src/support/action/pause';

describe(
    'pause', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                pause: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call pause on the browser object',
            () => {
                pause(1000, done);

                expect(global.browser.pause).toHaveBeenCalledTimes(1);
                expect(global.browser.pause).toHaveBeenCalledWith(1000);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
