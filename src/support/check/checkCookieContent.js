/**
 * Check the content of a cookie against a given value
 * @param  {String}   name          The name of the cookie
 * @param  {String}   falseCase     Whether or not to check if the value matches
 *                                  or not
 * @param  {String}   expectedValue The value to check against
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (name, falseCase, expectedValue, done) => {
    /**
     * The cookie retrieved from the browser object
     * @type {Object}
     */
    const cookie = browser.getCookie(name);

    expect(cookie.name).to.equal(
        name,
        `no cookie found with the name "${name}"`
    );

    if (falseCase) {
        expect(cookie.value).to.not
            .equal(
                expectedValue,
                `expected cookie "${name}" not to have value "${expectedValue}"`
            );
    } else {
        expect(cookie.value).to
            .equal(
                expectedValue,
                `expected cookie "${name}" to have value "${expectedValue}"` +
                ` but got "${cookie.value}"`
            );
    }

    done();
};
