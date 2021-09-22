import checkURLPath from 'src/support/check/checkURLPath';

describe('checkURLPath', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getUrl: jest.fn(() => Promise.resolve('http://example.com/test')),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            not: {
                toEqual: expectToNotEqual,
            },
            toEqual: expectToEqual,
        }));
    });

    it('Should test if the URL path matches the given value', async () => {
        await checkURLPath(false, 'test');

        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith(
            'test',
            'expected path to be "test" but found "/test"'
        );
    });

    it('Should test if the URL path does not match the given value', async () => {
        await checkURLPath(true, 'test');

        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            'test',
            'expected path not to be "/test"'
        );
    });

    it('Should replace the domain from the current getUrl', async () => {
        global.browser.getUrl.mockReturnValueOnce(
            'http://www.example.com/test'
        );

        await checkURLPath(true, 'test');

        _expect(global.browser.getUrl).toHaveBeenCalledTimes(1);
        _expect(global.browser.getUrl).toHaveBeenCalledWith();

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith(
            'test',
            'expected path not to be "/test"'
        );
    });
});
