import type { Selector } from 'webdriverio';

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export default (
    elementType: 'element' | 'button',
    selector: Selector,
    falseCase: boolean,
    expectedText: string
) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    let command: 'getText' | 'getValue' = 'getValue';

    if (
        elementType === 'button'
        || $(selector).getAttribute('value') === null
    ) {
        command = 'getText';
    }

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
    if (typeof parsedExpectedText === 'function') {
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    const text = $(selector)[command]();

    if (boolFalseCase) {
        expect(parsedExpectedText).not.toBe(text);
    } else {
        expect(parsedExpectedText).toBe(text);
    }
};
