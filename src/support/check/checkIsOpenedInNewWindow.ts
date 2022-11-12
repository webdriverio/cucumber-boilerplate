/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async (expectedUrl: string, obsolete: never) => {
    /**
     * All the current window handles
     * @type {Object}
     */
    const windowHandles = await browser.getWindowHandles();

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
    const windowUrl = await browser.getUrl();

    expect(windowUrl).toContain(
        expectedUrl,
        // @ts-expect-error
        'The popup has a incorrect getUrl'
    );

    await browser.closeWindow();
};
