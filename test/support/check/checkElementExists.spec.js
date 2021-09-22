import checkElementExists from 'src/support/check/checkElementExists';

describe('checkElementExists', () => {
    let expectToHaveLengthOf;
    let expectToHaveLengthOfAtLeast;

    beforeEach(() => {
        global.$$ = jest.fn(() => Promise.resolve(1));

        expectToHaveLengthOf = jest.fn();
        expectToHaveLengthOfAtLeast = jest.fn();

        global.expect = jest.fn(() => ({
            toBeGreaterThanOrEqual: expectToHaveLengthOfAtLeast,
            toHaveLength: expectToHaveLengthOf,
        }));
    });

    it('Should test if the element exists', async () => {
        await checkElementExists('an', 'element1');

        _expect(global.$$).toHaveBeenCalledTimes(1);
        _expect(global.$$).toHaveBeenCalledWith('element1');

        _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
            1,
            'Element with selector "element1" should exist on the page'
        );
    });

    it('Should test if the element does not exist', async () => {
        await checkElementExists('no', 'element2');

        _expect(global.$$).toHaveBeenCalledTimes(1);
        _expect(global.$$).toHaveBeenCalledWith('element2');

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            0,
            'Element with selector "element2" should not exist on the page'
        );
    });
});
