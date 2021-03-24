import type { Selector } from 'webdriverio';

/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  text or not
 */
export default (
    elementType: 'element' | 'button',
    selector: Selector,
    falseCase?: any
) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command: 'getValue' | 'getText' = 'getValue';

    if (
        elementType === 'button'
        || $(selector).getAttribute('value') === null
    ) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The text of the element
     * @type {String}
     */
    const text = $(selector)[command]();

    if (typeof falseCase === 'undefined') {
        boolFalseCase = false;
    } else {
        boolFalseCase = Boolean(falseCase);
    }

    if (boolFalseCase) {
        expect(text).toBe('');
    } else {
        expect(text).not.toBe('');
    }
};
