/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
export default (key: string | string[]) => {
    browser.keys(key);
};
