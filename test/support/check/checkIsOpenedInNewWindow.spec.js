import checkIsOpenedInNewWindow from
    'src/support/check/checkIsOpenedInNewWindow';

describe('checkIsOpenedInNewWindow', () => {
    let expectLengthShouldNotEqual;
    let expectShouldContain;

    beforeEach(() => {
        global.browser = {
            windowHandles: jest.fn(() => ({
                value: [
                    'window1',
                    'window2',
                ],
            })),
            window: jest.fn(() => {}),
            url: jest.fn(() => ({
                value: 'http://www.example.com/test',
            })),
            close: jest.fn(() => {}),
        };

        expectLengthShouldNotEqual = jest.fn();
        expectShouldContain = jest.fn();

        global.expect = jest.fn(() => ({
            length: {
                to: {
                    not: {
                        equal: expectLengthShouldNotEqual,
                    },
                },
            },
            to: {
                contain: expectShouldContain,
            },
        }));
    });

    it('Should fail if no popup was opened', () => {
        global.expect = jest.fn(() => {
            throw new Error();
        });

        global.browser.windowHandles.mockReturnValueOnce({
            value: [
                'window1',
            ],
        });

        try {
            checkIsOpenedInNewWindow(
                'http://www.example.com/test',
                ''
            );
        } catch (e) {
            _expect(e);
        }

        _expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.windowHandles).toHaveBeenCalledWith();

        _expect(global.browser.window).not.toHaveBeenCalled();

        _expect(global.browser.url).not.toHaveBeenCalled();

        _expect(global.browser.close).not.toHaveBeenCalled();

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith([
            'window1',
        ]);

        _expect(global.expect).toThrow();

        _expect(expectLengthShouldNotEqual).not.toHaveBeenCalled();
        _expect(expectShouldContain).not.toHaveBeenCalled();
    });

    it('Should not fail if the URL of the popup does match', () => {
        checkIsOpenedInNewWindow(
            'http://www.example.com/test',
            ''
        );

        _expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);
        _expect(global.browser.windowHandles).toHaveBeenCalledWith();

        _expect(global.browser.window).toHaveBeenCalledTimes(1);
        _expect(global.browser.window).toHaveBeenCalledWith('window2');

        _expect(global.browser.url).toHaveBeenCalledTimes(1);
        _expect(global.browser.url).toHaveBeenCalledWith();

        _expect(global.browser.close).toHaveBeenCalledTimes(1);
        _expect(global.browser.close).toHaveBeenCalledWith();

        _expect(expectLengthShouldNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectShouldContain).toHaveBeenCalledTimes(1);
        _expect(expectShouldContain).toHaveBeenCalledWith(
            'http://www.example.com/test',
            'The popup has a incorrect url'
        );
    });
});
