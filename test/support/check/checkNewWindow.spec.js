import checkNewWindow from 'src/support/check/checkNewWindow';

describe('checkNewWindow', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn(() => Promise.resolve({
                value: ['window1'],
            })),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toHaveLength: expectToNotEqual,
            },
            toHaveLength: expectToEqual,
        }));
    });

    it('Should test if a new window is opened', async () => {
        await checkNewWindow('', false);

        _expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.getWindowHandles).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            1,
            'A new window has been opened'
        );
    });

    it('Should test if a new window is not opened', async () => {
        await checkNewWindow('', true);

        _expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.getWindowHandles).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            1,
            'A new window should not have been opened'
        );
    });
});
