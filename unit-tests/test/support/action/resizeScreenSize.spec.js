import resizeScreenSize from 'src/support/action/resizeScreenSize';

describe(
    'resizeScreenSize', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                windowHandleSize: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call windowHandleSize on the browser object',
            () => {
                resizeScreenSize(1, 2, done);

                expect(global.browser.windowHandleSize)
                    .toHaveBeenCalledTimes(1);
                expect(global.browser.windowHandleSize)
                    .toHaveBeenCalledWith({
                        width: 1,
                        height: 2,
                    });

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
