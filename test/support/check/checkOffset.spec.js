import checkOffset from 'src/support/check/checkOffset';

let getLocationMock;

describe('checkOffset', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        getLocationMock = jest.fn(() => Promise.resolve(100));
        global.$ = jest.fn().mockReturnValue({
            getLocation: getLocationMock,
        });

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toEqual: expectToNotEqual,
            },
            toEqual: expectToEqual,
        }));
    });

    it(
        'Should test if the element is positioned at the expected location',
        async () => {
            await checkOffset('#elem1', false, 100, 'x');

            _expect(getLocationMock).toHaveBeenCalledTimes(1);
            _expect(getLocationMock).toHaveBeenCalledWith('x');

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual).toHaveBeenCalledWith(
                100,
                'Element "#elem1" should be positioned at '
                + '100px on the x axis, but was '
                + 'found at 100px'
            );
        }
    );

    it(
        'Should test if the element is not positioned at the expected '
        + 'location',
        async () => {
            await checkOffset('#elem2', true, 200, 'y');

            _expect(getLocationMock).toHaveBeenCalledTimes(1);
            _expect(getLocationMock).toHaveBeenCalledWith('y');

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual).toHaveBeenCalledWith(
                200,
                'Element "#elem2" should not be positioned at '
                + '200px on the y axis'
            );
        }
    );
});
