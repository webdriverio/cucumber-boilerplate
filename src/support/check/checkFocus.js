/**
 * Check if the given element has the focus
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 */
module.exports = (selector, falseCase) => {
    /**
     * Value of the hasFocus function for the given element
     * @type {Boolean}
     */
    const hasFocus = $(selector).isFocused();

    if (falseCase) {
        expect(hasFocus).to.not
            .equal(true, 'Expected element to not be focused, but it is');
    } else {
        expect(hasFocus).to
            .equal(true, 'Expected element to be focused, but it is not');
    }
};
