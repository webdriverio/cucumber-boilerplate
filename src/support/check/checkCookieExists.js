/**
 * Check if a cookie with the given name exists
 * @param  {[type]}   name      The name of the cookie
 * @param  {[type]}   falseCase Whether or not to check if the cookie exists or
 *                              not
 */
module.exports = (name, falseCase) => {
    /**
     * The cookie as retrieved from the browser
     * @type {Object}
     */
    const cookie = browser.getCookie(name);

    if (falseCase) {
        expect(cookie).to.equal(
            null,
            `Expected cookie "${name}" not to exists but it does`
        );
    } else {
        expect(cookie).to.not.equal(
            null,
            `Expected cookie "${name}" to exists but it does not`
        );
    }
};
