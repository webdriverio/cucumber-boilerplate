/**
 * Check if the given elements contains text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (element, falseCase, expectedText, done) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = 'getValue';

    if (browser.getAttribute(element, 'value') === null) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The expected text
     * @type {String}
     */
    let stringExpectedText = expectedText;

    /**
     * Callback to trigger when done
     * @type {Function}
     */
    let doneCallback = done;

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof expectedText === 'function') {
        doneCallback = expectedText;
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    if (boolFalseCase) {
        expect(text).to.not.contain(stringExpectedText);
    } else {
        expect(text).to.contain(stringExpectedText);
    }

    doneCallback();
};
