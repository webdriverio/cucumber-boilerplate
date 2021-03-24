/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete: never) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window handle
     * @type {Object}
     */
    const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

    browser.closeWindow();
    browser.switchToWindow(lastWindowHandle);
};
