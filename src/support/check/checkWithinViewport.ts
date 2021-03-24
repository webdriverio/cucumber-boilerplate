import type { Selector } from 'webdriverio';

/**
 * Check if the given element is visible inside the current viewport
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is visible
 *                              within the current viewport or not
 */
export default (selector: Selector, falseCase: boolean) => {
    /**
     * The state of visibility of the given element inside the viewport
     * @type {Boolean}
     */
    const isDisplayed = $(selector).isDisplayedInViewport();

    if (falseCase) {
        expect(isDisplayed).not.toEqual(
            true,
            // @ts-expect-error
            `Expected element "${selector}" to be outside the viewport`
        );
    } else {
        expect(isDisplayed).toEqual(
            true,
            // @ts-expect-error
            `Expected element "${selector}" to be inside the viewport`
        );
    }
};
