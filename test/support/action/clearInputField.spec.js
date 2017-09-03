import clearInputField from 'src/support/action/clearInputField';

describe('clearInputField', () => {
    let element;

    beforeEach(() => {
        global.browser = {
            clearElement: jest.fn(),
        };

        element = 'element_selector';
    });

    it('should call clearElement on the browser', () => {
        clearInputField(element);

        expect(browser.clearElement).toHaveBeenCalledWith(element);
    });
});
