import selectOptionByIndex from 'src/support/action/selectOptionByIndex';

let selectByIndexMock;

describe('selectOptionByIndex', () => {
    beforeEach(() => {
        selectByIndexMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            selectByIndex: selectByIndexMock,
        });
    });

    it('should call selectByIndex on the browser object', async () => {
        await selectOptionByIndex(1, '', 'element');

        expect(selectByIndexMock).toHaveBeenCalledTimes(1);
        expect(selectByIndexMock).toHaveBeenCalledWith(1);
    });
});
