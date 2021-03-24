import type { Selector } from 'webdriverio';

/**
 * Compare the contents of two elements with each other
 * @param  {String}   selector1  Element selector for the first element
 * @param  {String}   falseCase Whether to check if the contents of both
 *                              elements match or not
 * @param  {String}   selector2  Element selector for the second element
 */
export default (
    selector1: Selector,
    falseCase: boolean,
    selector2: Selector
) => {
    /**
     * The text of the first element
     * @type {String}
     */
    const text1 = $(selector1).getText();

    /**
     * The text of the second element
     * @type {String}
     */
    const text2 = $(selector2).getText();

    if (falseCase) {
        expect(text1).not.toEqual(
            text2,
            // @ts-expect-error
            `Expected text not to be "${text1}"`
        );
    } else {
        expect(text1).toEqual(
            text2,
            // @ts-expect-error
            `Expected text to be "${text1}" but found "${text2}"`
        );
    }
};
