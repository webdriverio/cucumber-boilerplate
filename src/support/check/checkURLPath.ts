/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
export default (falseCase: boolean, expectedPath: string) => {
    /**
     * The URL of the current browser window
     * @type {String}
     */
    let currentUrl = browser.getUrl().replace(/http(s?):\/\//, '');

    /**
     * The base URL of the current browser window
     * @type {Object}
     */
    const domain = `${currentUrl.split('/')[0]}`;

    currentUrl = currentUrl.replace(domain, '');

    if (falseCase) {
        expect(currentUrl)
            // @ts-expect-error
            .not.toEqual(expectedPath, `expected path not to be "${currentUrl}"`);
    } else {
        expect(currentUrl).toEqual(
            expectedPath,
            // @ts-expect-error
            `expected path to be "${expectedPath}" but found `
            + `"${currentUrl}"`
        );
    }
};
