import type { Selector } from 'webdriverio';

/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   selector          Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 */
export default (
    isCSS: boolean,
    attrName: string,
    selector: Selector,
    falseCase: boolean,
    expectedValue: number | string
) => {
    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    const command = isCSS ? 'getCSSProperty' : 'getAttribute';

    /**
     * Te label to identify the attribute by
     * @type {String}
     */
    const attrType = (isCSS ? 'CSS attribute' : 'Attribute');

    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let attributeValue = $(selector)[command](attrName);

    // eslint-disable-next-line
    expectedValue = isFinite(expectedValue as number) ?
        parseFloat(expectedValue as string)
        : expectedValue;

    /**
     * when getting something with a color or font-weight WebdriverIO returns a
     * object but we want to assert against a string
     */
    if (attrName.match(/(color|font-weight)/)) {
        // @ts-expect-error
        attributeValue = attributeValue.value;
    }

    if (falseCase) {
        expect(attributeValue).not.toEqual(
            expectedValue,
            // @ts-expect-error
            `${attrType}: ${attrName} of element "${selector}" should `
            + `not contain "${attributeValue}"`
        );
    } else {
        expect(attributeValue).toEqual(
            expectedValue,
            // @ts-expect-error
            `${attrType}: ${attrName} of element "${selector}" should `
            + `contain "${attributeValue}", but "${expectedValue}"`
        );
    }
};
