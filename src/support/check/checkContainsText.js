/**
 * Check if the given elements contains text
 * @param  {String}   type      Type of element (inputfield or element)
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the content contains text
 *                              or not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (type, element, falseCase, done) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (falseCase) {
        expect(text).to.not.be.empty();
    } else {
        expect(text).to.be.empty();
    }

    done();
};
