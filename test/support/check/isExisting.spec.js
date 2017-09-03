import isExisting from 'src/support/check/isExisting';

describe('isExisting', () => {
    let expectToHaveLengthAbove;
    let expectToHaveLengthOf;

    beforeEach(() => {
        global.browser = {
            elements: jest.fn(() => ({
                value: ['1'],
            })),
        };

        expectToHaveLengthAbove = jest.fn();
        expectToHaveLengthOf = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                have: {
                    length: {
                        above: expectToHaveLengthAbove,
                    },
                    lengthOf: expectToHaveLengthOf,
                },
            },
        }));
    });

    it('Should test if the element exists', () => {
        isExisting('#elem1', false);

        _expect(global.browser.elements).toHaveBeenCalledTimes(1);
        _expect(global.browser.elements).toHaveBeenCalledWith('#elem1');

        _expect(expectToHaveLengthAbove).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthAbove)
            .toHaveBeenCalledWith(
                0,
                'Expected element "#elem1" to exist'
            );
    });

    it('Should test if the element does not exist', () => {
        isExisting('#elem2', true);

        _expect(global.browser.elements).toHaveBeenCalledTimes(1);
        _expect(global.browser.elements).toHaveBeenCalledWith('#elem2');

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf)
            .toHaveBeenCalledWith(
                0,
                'Expected element "#elem2" not to exist'
            );
    });
});
