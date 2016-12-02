import waitFor from 'src/support/action/waitFor';

describe(
    'waitFor', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                waitForExist: jest.fn(),
                waitForSelected: jest.fn(),
                waitForEnabled: jest.fn(),
                waitForVisible: jest.fn(),
                waitForText: jest.fn(),
                waitForValue: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, undefined, '', done);

                expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForExist)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, false, '', done);

                expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForExist)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, false, true, '', done);

                expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForExist)
                    .toHaveBeenCalledWith('element', 1, true);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should use a default value for the timeout',
            () => {
                waitFor('element', '', 0, false, false, '', done);

                expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForExist)
                    .toHaveBeenCalledWith('element', 3000, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForSelected on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be checked', done);

                expect(global.browser.waitForSelected).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForSelected)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForEnabled on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be enabled', done);

                expect(global.browser.waitForEnabled).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForEnabled)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForSelected on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be selected', done);

                expect(global.browser.waitForSelected).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForSelected)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForVisible on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'be visible', done);

                expect(global.browser.waitForVisible).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForVisible)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForText on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'contain a text', done);

                expect(global.browser.waitForText).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForText)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForValue on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'contain a value', done);

                expect(global.browser.waitForValue).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForValue)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call waitForExist on the browser object',
            () => {
                waitFor('element', '', 1, true, false, 'exist', done);

                expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
                expect(global.browser.waitForExist)
                    .toHaveBeenCalledWith('element', 1, false);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
