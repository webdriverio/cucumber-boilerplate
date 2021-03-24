/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete: never) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

    browser.switchToWindow(lastWindowHandle);
};
