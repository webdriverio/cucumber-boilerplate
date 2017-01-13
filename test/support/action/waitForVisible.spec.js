import waitForVisible from 'src/support/action/waitForVisible';

describe(
    'waitForVisible', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                waitForVisible: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitForVisible('element', true, done);

                expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForVisible)
                    .toHaveBeenCalledWith('element', 10000, true);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitForVisible('element', false, done);

                expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForVisible)
                    .toHaveBeenCalledWith('element', 10000, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
