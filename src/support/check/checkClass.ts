import type { Selector } from 'webdriverio';

/**
 * Check if the given element has the given class
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase             Whether to check for the class to exist
 *                                          or not ('has', 'does not have')
 * @param  {String}   expectedClassName     The class name to check
 */
export default (
    selector: Selector,
    falseCase: string,
    expectedClassName: string
) => {
    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const classesList = $(selector).getAttribute('className').split(' ');

    if (falseCase === 'does not have') {
        expect(classesList).not.toContain(
            expectedClassName,
            // @ts-expect-error
            `Element ${selector} should not have the class ${expectedClassName}`
        );
    } else {
        expect(classesList).toContain(
            expectedClassName,
            // @ts-expect-error
            `Element ${selector} should have the class ${expectedClassName}`
        );
    }
};
