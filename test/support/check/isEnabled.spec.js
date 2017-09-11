import isEnabled from 'src/support/check/isEnabled';

describe('isEnabled', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            isEnabled: jest.fn(() => true),
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

    it('Should test if the element is enabled', () => {
        isEnabled('#elem1', false);

        _expect(global.browser.isEnabled).toHaveBeenCalledTimes(1);
        _expect(global.browser.isEnabled)
            .toHaveBeenCalledWith('#elem1');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                true,
                'Expected element "#elem1" to be enabled'
            );
    });

    it('Should test if the element is not enabled', () => {
        isEnabled('#elem2', true);

        _expect(global.browser.isEnabled).toHaveBeenCalledTimes(1);
        _expect(global.browser.isEnabled)
            .toHaveBeenCalledWith('#elem2');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                true,
                'Expected element "#elem2" not to be enabled'
            );
    });
});
