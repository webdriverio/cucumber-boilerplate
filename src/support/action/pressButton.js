/**
 * Perform a key press
 * @param  {String}   key  The key to press
 * @param  {Function} done Function to execute when finished
 */
module.exports = (key, done) => {
    browser.keys(key);

    done();
};
