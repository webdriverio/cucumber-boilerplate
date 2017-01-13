import submitForm from 'src/support/action/submitForm';

describe(
    'submitForm', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                submitForm: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call submitForm on the browser object',
            () => {
                submitForm('form', done);

                expect(global.browser.submitForm).toHaveBeenCalledTimes(1);
                expect(global.browser.submitForm).toHaveBeenCalledWith('form');

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
