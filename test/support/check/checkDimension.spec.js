import checkDimension from 'src/support/check/checkDimension';

describe('checkDimension', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getElementSize: jest.fn(() => ({
                width: 100,
                height: 200,
            })),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                equal: expectToEqual,
                not: {
                    equal: expectToNotEqual,
                },
            },
        }));
    });

    it('Should test the height of an element against a given value', () => {
        checkDimension('element1', false, 200, 'tall');

        _expect(global.browser.getElementSize).toHaveBeenCalledTimes(1);
        _expect(global.browser.getElementSize)
            .toHaveBeenCalledWith('element1');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                200,
                'Element "element1" should have a height of ' +
                '200px, but is 200px'
            );
    });

    it('Should test the width of an element against a given value', () => {
        checkDimension('element2', false, 100, 'broad');

        _expect(global.browser.getElementSize).toHaveBeenCalledTimes(1);
        _expect(global.browser.getElementSize)
            .toHaveBeenCalledWith('element2');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                100,
                'Element "element2" should have a width of ' +
                '100px, but is 100px'
            );
    });

    it('Should test the height of an element against a given value', () => {
        checkDimension('element3', true, 200, 'tall');

        _expect(global.browser.getElementSize).toHaveBeenCalledTimes(1);
        _expect(global.browser.getElementSize)
            .toHaveBeenCalledWith('element3');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                200,
                'Element "element3" should not have a height of 200px'
            );
    });
});
