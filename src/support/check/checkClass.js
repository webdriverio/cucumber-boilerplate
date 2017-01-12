/**
 * Check if the given element has the given class
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 * @param  {Function} done              Function to execute when finished
 */
module.exports = (elem, falseCase, expectedClassName, done) => {
    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const classesList = browser.getAttribute(elem, 'className').split(' ');

    if (falseCase === 'does not have') {
        expect(classesList).to.not
            .include(
                expectedClassName,
                `Element ${elem} should not have the class ${expectedClassName}`
            );
    } else {
        expect(classesList).to
            .include(
                expectedClassName,
                `Element ${elem} should have the class ${expectedClassName}`
            );
    }

    done();
};
