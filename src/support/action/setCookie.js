/**
 * Set a given cookie to a given value. When the cookies does not exist it will
 * be created
 * @param  {String}   cookieName    The name of the cookie
 * @param  {String}   cookieContent The value of the cookie
 */
module.exports = (cookieName, cookieContent) => {
    browser.setCookie({
        name: cookieName,
        value: cookieContent,
    });
};
