/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete: never) => {
    /* eslint-enable no-unused-vars */
    /**
     * The current window handle
     * @type {Object}
     */
    const currentWindowHandle = browser.getWindowHandle();
    /**
    * The last opened window handle
    * @type {Object}
    */
    const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

    if (currentWindowHandle === lastWindowHandle) browser.closeWindow();
    else {
        browser.switchToWindow(lastWindowHandle);
        browser.closeWindow();
        browser.switchToWindow(currentWindowHandle);
    }
};
