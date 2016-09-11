/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   type          Type of element (inputfield or element)
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (type, element, falseCase, expectedText, done) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    /**
     * Function to execute when finished
     * @type {Function}
     */
    let doneCallback = done;

    /**
     * The expected text to validate against
     * @type {String}
     */
    let parsedExpectedText = expectedText;

    /**
     * Whether to check if the content equals the given text or not
     * @type {Boolean}
     */
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (!doneCallback && typeof parsedExpectedText === 'function') {
        doneCallback = parsedExpectedText;
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    const text = browser[command](element);

    if (boolFalseCase) {
        parsedExpectedText.should.not.equal(text);
    } else {
        parsedExpectedText.should.equal(text);
    }

    doneCallback();
};
