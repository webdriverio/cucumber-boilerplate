/**
 * Check if a new window or tab is opened
 * @param  {String}   obsolete  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 */
export default (obsolete, falseCase) => {
    /**
     * The handles of all open windows/tabs
     * @type {Object}
     */
    const windowHandles = browser.getWindowHandles();

    if (falseCase) {
        expect(windowHandles)
            .toHaveLength(1, 'A new window should not have been opened');
    } else {
        expect(windowHandles)
            .not.toHaveLength(1, 'A new window has been opened');
    }
};
