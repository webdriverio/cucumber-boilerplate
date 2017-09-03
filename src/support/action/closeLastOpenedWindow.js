/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window handle
     * @type {Object}
     */
    const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

    browser.window(lastWindowHandle);

    browser.close();
};
