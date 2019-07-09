/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
export default (key) => {
    browser.keys(key);
};
