/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 * @param  {Function} done Function to execute when finished
 */
module.exports = (name, done) => {
    browser.deleteCookie(name);

    done();
};
