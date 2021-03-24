import type { Selector } from 'webdriverio';

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (selector: Selector, falseCase: boolean) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isDisplayed = $(selector).isDisplayed();

    if (falseCase) {
        expect(isDisplayed).not.toEqual(
            true,
            // @ts-expect-error
            `Expected element "${selector}" not to be displayed`
        );
    } else {
        expect(isDisplayed).toEqual(
            true,
            // @ts-expect-error
            `Expected element "${selector}" to be displayed`
        );
    }
};
