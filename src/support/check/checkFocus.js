/**
 * Check if the given element has the focus
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (selector, falseCase, done) => {
    /**
     * Value of the hasFocus function for the given element
     * @type {Boolean}
     */
    const hasFocus = browser.hasFocus(selector);

    if (falseCase) {
        expect(hasFocus).to.not
            .equal(true, 'Expected element to not be focused, but it is');
    } else {
        expect(hasFocus).to
            .equal(true, 'Expected element to be focused, but it is not');
    }

    done();
};
