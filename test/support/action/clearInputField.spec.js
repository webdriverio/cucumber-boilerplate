import clearInputField from 'src/support/action/clearInputField';

let clearElementMock;

describe('clearInputField', () => {
    let element;

    beforeEach(() => {
        clearElementMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            clearValue: clearElementMock,
        });
        element = 'element_selector';
    });

    it('should call clearElement on the browser', async () => {
        await clearInputField(element);
        expect(clearElementMock).toHaveBeenCalled();
    });
});
