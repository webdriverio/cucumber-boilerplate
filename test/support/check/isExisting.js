/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (selector, falseCase, done) => {
    /**
     * Elements found in the DOM
     * @type {Object}
     */
    const elements = browser.elements(selector).value;

    if (falseCase) {
        expect(elements).to.have
            .length(0, `expected element "${elements}" not to exist`);
    } else {
        expect(elements).to.have.length
            .above(0, `expected element "${elements}" to exist`);
    }

    done();
};
