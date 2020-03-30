/**
 * Check if the given string is in the URL path
 * @param  {String}   falseCase       Whether to check if the given string is in
 *                                    the URL path or not
 * @param  {String}   expectedUrlPart The string to check for
 */
export default (falseCase, expectedUrlPart) => {
    /**
     * The URL of the current browser window
     * @type {String}
     */
    const currentUrl = browser.getUrl();

    if (falseCase) {
        expect(currentUrl).not.toContain(
            expectedUrlPart,
            `Expected URL "${currentUrl}" not to contain `
            + `"${expectedUrlPart}"`
        );
    } else {
        expect(currentUrl).toContain(
            expectedUrlPart,
            `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
        );
    }
};
