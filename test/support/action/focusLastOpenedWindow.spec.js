import focusLastOpenedWindow from 'src/support/action/focusLastOpenedWindow';

describe(
    'focusLastOpenedWindow', () => {
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
            };

            done = jest.fn();
        });

        it('should call focusLastOpenedWindow on the browser', () => {
            focusLastOpenedWindow('', done);

            expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);

            expect(global.browser.window).toHaveBeenCalledTimes(1);

            expect(global.browser.window).toHaveBeenCalledWith('three');

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
