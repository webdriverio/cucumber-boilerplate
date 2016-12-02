import pressButton from 'src/support/action/pressButton';

describe(
    'pressButton', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                keys: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call keys on the browser object',
            () => {
                pressButton('e', done);

                expect(global.browser.keys).toHaveBeenCalledTimes(1);
                expect(global.browser.keys).toHaveBeenCalledWith('e');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
