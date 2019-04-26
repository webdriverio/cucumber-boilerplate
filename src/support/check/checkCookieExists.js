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
    const cookie = browser.getCookies(name);

    if (falseCase) {
        expect(cookie.length).to.equal(
            0,
            `Expected cookie "${name}" not to exists but it does`
        );
    } else {
        expect(cookie.length).to.not.equal(
            0,
            `Expected cookie "${name}" to exists but it does not`
        );
    }
};
