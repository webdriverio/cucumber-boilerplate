import isEnabled from 'src/support/check/isEnabled';

let isEnabledMock;

describe('isEnabled', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        isEnabledMock = jest.fn(() => Promise.resolve(true));
        global.$ = jest.fn().mockReturnValue({
            isEnabled: isEnabledMock,
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

    it('Should test if the element is enabled', async () => {
        await isEnabled('#elem1', false);

        _expect(isEnabledMock).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem1" to be enabled'
        );
    });

    it('Should test if the element is not enabled', async () => {
        await isEnabled('#elem2', true);

        _expect(isEnabledMock).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            true,
            'Expected element "#elem2" not to be enabled'
        );
    });
});
