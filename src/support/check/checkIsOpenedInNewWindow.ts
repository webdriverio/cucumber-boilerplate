/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 */
/* eslint-disable no-unused-vars */
export default (expectedUrl: string, obsolete: never) => {
/* eslint-enable no-unused-vars */
    /**
     * All the current window handles
     * @type {Object}
     */
    const windowHandles = browser.getWindowHandles();

    expect(windowHandles).not.toHaveLength(
        1,
        // @ts-expect-error
        'A popup was not opened'
    );

    /**
     * The last opened window handle
     * @type {Object}
     */
    const lastWindowHandle = windowHandles.slice(-1);

    // Make sure we focus on the last opened window handle
    browser.switchToWindow(lastWindowHandle[0]);

    /**
     * Get the URL of the current browser window
     * @type {String}
     */
    const windowUrl = browser.getUrl();

    expect(windowUrl).toContain(
        expectedUrl,
        // @ts-expect-error
        'The popup has a incorrect getUrl'
    );

    browser.closeWindow();
};
