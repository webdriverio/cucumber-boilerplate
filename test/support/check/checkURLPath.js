/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 * @param  {Function} done         Function to execute when finished
 */
module.exports = (falseCase, expectedPath, done) => {
    /**
     * The URL of the current browser window
     * @type {String}
     */
    let currentUrl = browser.url().value;

    /**
     * The base URL of the current browser window
     * @type {Object}
     */
    const domain = browser.options.baseUrl;

    // Remove the domain from the url
    if (currentUrl.indexOf(domain) === 0) {
        currentUrl = currentUrl.replace(domain, '');
    }

    if (falseCase) {
        currentUrl.should.not
            .equal(expectedPath, `expected path not to be "${currentUrl}"`);
    } else {
        currentUrl.should
            .equal(
                expectedPath,
                `expected path to be "${expectedPath}" but found ` +
                `"${currentUrl}"`
            );
    }

    done();
};
