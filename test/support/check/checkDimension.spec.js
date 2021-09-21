import checkDimension from 'src/support/check/checkDimension';

let getSizeMock;

describe('checkDimension', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        getSizeMock = jest.fn(() => Promise.resolve({
            width: 100,
            height: 200,
        }));
        global.$ = jest.fn().mockReturnValue({
            getSize: getSizeMock,
        });

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            toBe: expectToEqual,
            not: {
                toBe: expectToNotEqual,
            },
        }));
    });

    it('Should test the height of an element against a given value', async () => {
        await checkDimension('element1', false, 200, 'tall');

        _expect(getSizeMock).toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            200,
            'Element "element1" should have a height of '
            + '200px, but is 200px'
        );
    });

    it('Should test the width of an element against a given value', async () => {
        await checkDimension('element2', false, 100, 'broad');

        _expect(getSizeMock).toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            100,
            'Element "element2" should have a width of '
            + '100px, but is 100px'
        );
    });

    it('Should test the height of an element against a given value', async () => {
        await checkDimension('element3', true, 200, 'tall');

        _expect(getSizeMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            200,
            'Element "element3" should not have a height of 200px'
        );
    });
});
