/**
 * Check if a modal was opened
 * @param  {String}   modalType  The type of modal that is expected (alertbox,
 *                               confirmbox or prompt)
 * @param  {String}   falseState Whether to check if the modal was opened or not
 */
export default (modalType, falseState) => {
    /**
     * The text of the prompt
     * @type {String}
     */
    let promptText = '';

    try {
        promptText = browser.getAlertText();

        if (falseState) {
            expect(promptText).not.toEqual(
                null,
                `A ${modalType} was opened when it shouldn't`
            );
        }
    } catch (e) {
        if (!falseState) {
            expect(promptText).toEqual(
                null,
                `A ${modalType} was not opened when it should have been`
            );
        }
    }
};
