/**
 * Check if a cookie with the given name exists
 * @param  {[type]}   name      The name of the cookie
 * @param  {[type]}   falseCase Whether or not to check if the cookie exists or
 *                              not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (name, falseCase, done) => {
    /**
     * The cookie as retrieved from the browser
     * @type {Object}
     */
    const cookie = browser.getCookie(name);

    if (falseCase) {
        assert.isNull(
            cookie,
            `A cookie with the name "${name}" was found`
        );
    } else {
        assert.isNotNull(
            cookie,
            `A cookie with the name "${name}" was not found`
        );
    }

    done();
};
