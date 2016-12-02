/**
 * Check if a new window or tab is opened
 * @param  {String}   obsolete  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (obsolete, falseCase, done) => {
    /**
     * The handles of all open windows/tabs
     * @type {Object}
     */
    const windowHandles = browser.windowHandles().value;

    if (falseCase) {
        expect(windowHandles.length).to
            .equal(1, 'A new window should not have been opened');
    } else {
        expect(windowHandles.length).to.not
            .equal(1, 'A new window has been opened');
    }

    done();
};
