/**
 * Check the dimensions of the given element
 * @param  {String}   selector         Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
export default (selector, falseCase, expectedSize, dimension) => {
    /**
     * The size of the given element
     * @type {Object}
     */
    const elementSize = $(selector).getSize();

    /**
     * Parsed size to check for
     * @type {Int}
     */
    const intExpectedSize = parseInt(expectedSize, 10);

    /**
     * The size property to check against
     * @type {Int}
     */
    let originalSize = elementSize.height;

    /**
     * The label of the checked property
     * @type {String}
     */
    let label = 'height';

    if (dimension === 'broad') {
        originalSize = elementSize.width;
        label = 'width';
    }

    if (falseCase) {
        expect(originalSize).to.not
            .equal(
                intExpectedSize,
                `Element "${selector}" should not have a ${label} of `
                + `${intExpectedSize}px`
            );
    } else {
        expect(originalSize).to
            .equal(
                intExpectedSize,
                `Element "${selector}" should have a ${label} of `
                + `${intExpectedSize}px, but is ${originalSize}px`
            );
    }
};
