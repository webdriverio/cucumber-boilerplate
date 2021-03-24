/**
 * Check if a cookie with the given name exists
 * @param  {[type]}   name      The name of the cookie
 * @param  {[type]}   falseCase Whether or not to check if the cookie exists or
 *                              not
 */
export default (name: string, falseCase: boolean) => {
    /**
     * The cookie as retrieved from the browser
     * @type {Object}
     */
    const cookie = browser.getCookies(name);

    if (falseCase) {
        expect(cookie).toHaveLength(
            0,
            // @ts-expect-error
            `Expected cookie "${name}" not to exists but it does`
        );
    } else {
        expect(cookie).not.toHaveLength(
            0,
            // @ts-expect-error
            `Expected cookie "${name}" to exists but it does not`
        );
    }
};
