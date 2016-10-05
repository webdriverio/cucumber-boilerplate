/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 * @param  {Function} done     Function to execute when finished
 */
module.exports = (obsolete, done) => {
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

    browser.window(lastWindowHandle);

    done();
};
