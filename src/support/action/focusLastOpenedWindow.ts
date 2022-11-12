/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async (obsolete: never) => {
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = (await browser.getWindowHandles()).slice(-1)[0];

    await browser.switchToWindow(lastWindowHandle);
};
