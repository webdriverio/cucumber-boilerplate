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
        () => {
            moveTo('element', undefined, undefined);

            expect(moveToMock).toHaveBeenCalledTimes(1);
            expect(moveToMock).toHaveBeenCalledWith(undefined, undefined);
        }
    );

    it('should call moveToObject with x when provided as int', () => {
        moveTo('element', 1, undefined);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith(1, undefined);
    });

    it('should call moveToObject with y when provided as int', () => {
        moveTo('element', undefined, 1);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith(undefined, 1);
    });

    it('should call moveToObject with x and y when provided as int', () => {
        moveTo('element', 1, 2);

        expect(moveToMock).toHaveBeenCalledTimes(1);
        expect(moveToMock).toHaveBeenCalledWith(1, 2);
    });
});
