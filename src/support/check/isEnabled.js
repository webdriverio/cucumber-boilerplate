/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default (selector, falseCase) => {
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const isEnabled = $(selector).isEnabled();

    if (falseCase) {
        expect(isEnabled).to.not
            .equal(true, `Expected element "${selector}" not to be enabled`);
    } else {
        expect(isEnabled).to
            .equal(true, `Expected element "${selector}" to be enabled`);
    }
};
