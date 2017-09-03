import submitForm from 'src/support/action/submitForm';

describe('submitForm', () => {
    beforeEach(() => {
        global.browser = {
            submitForm: jest.fn(),
        };
    });

    it('should call submitForm on the browser object', () => {
        submitForm('form');

        expect(global.browser.submitForm).toHaveBeenCalledTimes(1);
        expect(global.browser.submitForm).toHaveBeenCalledWith('form');
    });
});
