import selectOptionByIndex from 'src/support/action/selectOptionByIndex';

describe('selectOptionByIndex', () => {
    beforeEach(() => {
        global.browser = {
            selectByIndex: jest.fn(),
        };
    });

    it('should call selectByIndex on the browser object', () => {
        selectOptionByIndex(1, '', 'element');

        expect(global.browser.selectByIndex).toHaveBeenCalledTimes(1);
        expect(global.browser.selectByIndex)
            .toHaveBeenCalledWith('element', 1);
    });
});
