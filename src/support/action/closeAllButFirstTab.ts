/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete: never) => {
/* eslint-enable no-unused-vars */
    /**
     * Get all the window handles
     * @type {Object}
     */
    const windowHandles = browser.getWindowHandles();

    // Close all tabs but the first one
    windowHandles.reverse();
    windowHandles.forEach((handle, index) => {
        browser.switchToWindow(handle);
        if (index < windowHandles.length - 1) {
            browser.closeWindow();
        }
    });
};
