import type { Selector } from 'webdriverio';
import type { RectReturn } from '@wdio/protocols';

/**
 * Check the dimensions of the given element
 * @param  {String}   selector         Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
export default (
    selector: Selector,
    falseCase: boolean,
    expectedSize: string,
    dimension: 'broad' | 'tall'
) => {
    /**
     * The size of the given element
     * @type {Object}
     */
    const elementSize = $(selector).getSize() as RectReturn;

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
        expect(originalSize).not.toBe(
            intExpectedSize,
            // @ts-expect-error
            `Element "${selector}" should not have a ${label} of `
            + `${intExpectedSize}px`
        );
    } else {
        expect(originalSize).toBe(
            intExpectedSize,
            // @ts-expect-error
            `Element "${selector}" should have a ${label} of `
            + `${intExpectedSize}px, but is ${originalSize}px`
        );
    }
};
