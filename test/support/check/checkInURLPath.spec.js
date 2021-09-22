import checkInURLPath from 'src/support/check/checkInURLPath';

describe('checkInURLPath', () => {
    let expectShouldContain;
    let expectShouldNotContain;

    beforeEach(() => {
        global.browser = {
            getUrl: jest.fn(() => Promise.resolve('http://www.example.com/test')),
        };

        expectShouldContain = jest.fn();
        expectShouldNotContain = jest.fn();

        global.expect = jest.fn(() => ({
            toContain: expectShouldContain,
            not: {
                toContain: expectShouldNotContain,
            },
        }));
    });

    it('Should test if URL contains the given value', async () => {
        await checkInURLPath(false, 'test');

        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();

        _expect(expectShouldContain).toHaveBeenCalledTimes(1);
        _expect(expectShouldContain).toHaveBeenCalledWith(
            'test',
            'Expected URL "http://www.example.com/test" to contain '
            + '"test"'
        );
    });

    it('Should test if URL does not contain the given value', async () => {
        await checkInURLPath(true, 'test2');

        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();

        _expect(expectShouldNotContain).toHaveBeenCalledTimes(1);
        _expect(expectShouldNotContain).toHaveBeenCalledWith(
            'test2',
            'Expected URL "http://www.example.com/test" not to '
            + 'contain "test2"'
        );
    });
});
