import clearInputField from 'src/support/action/clearInputField';

describe(
    'clearInputField', () => {
        let element;
        let done;

        beforeEach(() => {
            global.browser = {
                clearElement: jest.fn(),
            };

            element = 'element_selector';

            done = jest.fn();
        });

        it('should call clearElement on the browser', () => {
            clearInputField(element, done);

            expect(browser.clearElement).toHaveBeenCalledWith(element);

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
