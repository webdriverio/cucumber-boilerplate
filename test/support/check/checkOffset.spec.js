import checkOffset from 'src/support/check/checkOffset';

describe('checkOffset', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getLocation: jest.fn(() => 100),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                not: {
                    equal: expectToNotEqual,
                },
                equal: expectToEqual,
            },
        }));
    });

    it(
        'Should test if the element is positioned at the expected location',
        () => {
            checkOffset('#elem1', false, 100, 'x');

            _expect(global.browser.getLocation).toHaveBeenCalledTimes(1);
            _expect(global.browser.getLocation)
                .toHaveBeenCalledWith(
                    '#elem1',
                    'x'
                );

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    100,
                    'Element "#elem1" should be positioned at ' +
                    '100px on the x axis, but was ' +
                    'found at 100px'
                );
        }
    );

    it(
        'Should test if the element is not positioned at the expected ' +
        'location',
        () => {
            checkOffset('#elem2', true, 200, 'y');

            _expect(global.browser.getLocation).toHaveBeenCalledTimes(1);
            _expect(global.browser.getLocation)
                .toHaveBeenCalledWith(
                    '#elem2',
                    'y'
                );

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    200,
                    'Element "#elem2" should not be positioned at ' +
                    '200px on the y axis'
                );
        }
    );
});
