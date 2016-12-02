import closeLastOpenedWindow from 'src/support/action/closeLastOpenedWindow';

describe(
    'closeLastOpenedWindow', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                windowHandles: jest.fn(() => ({
                    value: [
                        'one',
                        'two',
                        'three',
                    ],
                })),
                window: jest.fn(),
                close: jest.fn(),
            };

            done = jest.fn();
        });

        it('should call closeLastOpenedWindow on the browser', () => {
            closeLastOpenedWindow('', done);

            expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);

            expect(global.browser.window).toHaveBeenCalledTimes(1);

            expect(global.browser.window).toHaveBeenCalledWith('three');

            expect(global.browser.close).toHaveBeenCalledTimes(1);

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
