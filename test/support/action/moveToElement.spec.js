import moveToElement from 'src/support/action/moveToElement';

describe('moveToElement', () => {
    beforeEach(() => {
        global.browser = {
            moveToObject: jest.fn(),
        };
    });

    it(
        'should call moveToObject with only the element when no x and y ' +
        'are provided',
        () => {
            moveToElement('element', undefined, undefined);

            expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
            expect(global.browser.moveToObject)
                .toHaveBeenCalledWith('element', undefined, undefined);
        }
    );

    it('should call moveToObject with x when provided as int', () => {
        moveToElement('element', 1, undefined);

        expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
        expect(global.browser.moveToObject)
            .toHaveBeenCalledWith('element', 1, undefined);
    });

    it('should call moveToObject with y when provided as int', () => {
        moveToElement('element', undefined, 1);

        expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
        expect(global.browser.moveToObject)
            .toHaveBeenCalledWith('element', undefined, 1);
    });

    it('should call moveToObject with x and y when provided as int', () => {
        moveToElement('element', 1, 2);

        expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
        expect(global.browser.moveToObject)
            .toHaveBeenCalledWith('element', 1, 2);
    });
});
