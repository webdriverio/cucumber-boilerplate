import moveTo from 'src/support/action/moveTo';

let moveToMock;

describe('moveTo', () => {
    beforeEach(() => {
        moveToMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            moveTo: moveToMock,
        });
    });

    it(
        'should call moveToObject with only the element when no x and y '
        + 'are provided',
        async () => {
            await moveTo('element', undefined, undefined);

            expect(moveToMock).toHaveBeenCalledTimes(1);
            expect(moveToMock).toHaveBeenCalledWith({
                xOffset: undefined,
                yOffset: undefined,
            });
        }
    );

    it('should call moveToObject with x when provided as int', async () => {
        await moveTo('element', 1, undefined);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith({
            xOffset: 1,
            yOffset: undefined,
        });
    });

    it('should call moveToObject with y when provided as int', async () => {
        await moveTo('element', undefined, 1);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith({
            xOffset: undefined,
            yOffset: 1,
        });
    });

    it('should call moveToObject with x and y when provided as int', async () => {
        await moveTo('element', 1, 2);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith({
            xOffset: 1,
            yOffset: 2,
        });
    });
});
