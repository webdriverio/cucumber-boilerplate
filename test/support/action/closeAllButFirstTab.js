/**
 * Close all but the first tab
 * @param  {String}   windowType Type of object to close (window or tab)
 * @param  {Function} done       Function to execute when finished
 */
module.exports = (windowType, done) => {
    /**
     * Get all the window handles
     * @type {Object}
     */
    const windowHandles = browser.windowHandles().value;

    // Close all tabs but the first one
    windowHandles.forEach((handle, index) => {
        if (index > 0) {
            browser.switchTab(handle).close();
        }
    });

    done();
};
