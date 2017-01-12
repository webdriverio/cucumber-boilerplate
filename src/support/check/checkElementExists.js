/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   elem       Element selector
 * @param  {Function} done       Function to execute when finished
 */
module.exports = (isExisting, elem, done) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = browser.elements(elem).value;

    if (isExisting === 'an') {
        expect(nrOfElements).to.have.length
            .above(
                0,
                `Element with selector "${elem}" should exist on the page`
            );
    } else {
        expect(nrOfElements).to.have
            .lengthOf(
                0,
                `Element with selector "${elem}" should not exist on the page`
            );
    }

    done();
};
