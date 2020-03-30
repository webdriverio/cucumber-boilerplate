/**
 * Check the title of the current browser window contains expected text/title
 * @param  {Type}     falseCase     Whether to check if the title contains the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default (falseCase, expectedTitle) => {
    /**
     * The actual title of the current browser window
     * @type {String}
     */
    const title = browser.getTitle();

    if (falseCase) {
        expect(title).not.toContain(
            expectedTitle,
            `Expected title not to contain "${expectedTitle}"`
        );
    } else {
        expect(title).toContain(
            expectedTitle,
            `Expected title to contain "${expectedTitle}" but found "${title}"`
        );
    }
};
