import checkIsOpenedInNewWindow from
    'src/support/check/checkIsOpenedInNewWindow';

describe('checkIsOpenedInNewWindow', () => {
    let expectLengthShouldNotEqual;
    let expectShouldContain;

    beforeEach(() => {
        global.browser = {
            getWindowHandles: jest.fn(() => Promise.resolve(['window1', 'window2'])),
            switchToWindow: jest.fn(() => Promise.resolve({
                // foo
            })),
            getUrl: jest.fn(() => Promise.resolve('http://www.example.com/test')),
            closeWindow: jest.fn(() => Promise.resolve({
                // foo
            })),
        };

        expectLengthShouldNotEqual = jest.fn();
        expectShouldContain = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toHaveLength: expectLengthShouldNotEqual,
            },
            toContain: expectShouldContain,
        }));
    });

    it('Should fail if no popup was opened', async () => {
        global.expect = jest.fn(() => {
            throw new Error();
        });

        global.browser.getWindowHandles.mockReturnValueOnce(['window1']);

        try {
            await checkIsOpenedInNewWindow(
                'http://www.example.com/test',
                ''
            );
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.getWindowHandles).toHaveBeenCalledWith();
        _expect(global.browser.switchToWindow).not.toHaveBeenCalled();
        _expect(global.browser.getUrl).not.toHaveBeenCalled();
        _expect(global.browser.closeWindow).not.toHaveBeenCalled();
        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith(['window1']);

        _expect(global.expect).toThrow();

        _expect(expectLengthShouldNotEqual).not.toHaveBeenCalled();
        _expect(expectShouldContain).not.toHaveBeenCalled();
    });

    it('Should not fail if the URL of the popup does match', async () => {
        await checkIsOpenedInNewWindow('http://www.example.com/test', '');

        _expect(global.browser.getWindowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.getWindowHandles).toHaveBeenCalledWith();
        _expect(global.browser.switchToWindow).toHaveBeenCalledTimes(1);
        _expect(global.browser.switchToWindow).toHaveBeenCalledWith('window2');
        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();
        _expect(global.browser.closeWindow).toHaveBeenCalledTimes(1);
        _expect(global.browser.closeWindow).toHaveBeenCalledWith();

        _expect(expectLengthShouldNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectShouldContain).toHaveBeenCalledTimes(1);
        _expect(expectShouldContain).toHaveBeenCalledWith(
            'http://www.example.com/test',
            'The popup has a incorrect getUrl'
        );
    });
});
