/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
export default (falseCase: boolean, expectedUrl: string) => {
    /**
     * The current browser window's URL
     * @type {String}
     */
    const currentUrl = browser.getUrl();

    if (falseCase) {
        expect(currentUrl)
            // @ts-expect-error
            .not.toEqual(expectedUrl, `expected url not to be "${currentUrl}"`);
    } else {
        expect(currentUrl).toEqual(
            expectedUrl,
            // @ts-expect-error
            `expected url to be "${expectedUrl}" but found `
            + `"${currentUrl}"`
        );
    }
};
