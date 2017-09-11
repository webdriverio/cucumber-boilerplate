/**
 * Check the offset of the given element
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check if the offset matches
 *                                      or not
 * @param  {String}   expectedPosition  The position to check against
 * @param  {String}   axis              The axis to check on (x or y)
 */
module.exports = (elem, falseCase, expectedPosition, axis) => {
    /**
     * Get the location of the element on the given axis
     * @type {[type]}
     */
    const location = browser.getLocation(elem, axis);

    /**
     * Parsed expected position
     * @type {Int}
     */
    const intExpectedPosition = parseInt(expectedPosition, 10);

    if (falseCase) {
        expect(location).to.not
            .equal(
                intExpectedPosition,
                `Element "${elem}" should not be positioned at ` +
                `${intExpectedPosition}px on the ${axis} axis`
            );
    } else {
        expect(location).to
            .equal(
                intExpectedPosition,
                `Element "${elem}" should be positioned at ` +
                `${intExpectedPosition}px on the ${axis} axis, but was found ` +
                `at ${location}px`
            );
    }
};
