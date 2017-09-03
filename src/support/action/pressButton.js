/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = (key) => {
    browser.keys(key);
};
