import { Selector } from 'webdriverio';

/**
 * Move to the given selector with an optional offset on a X and Y position
 * @param  {String}   selector  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
export default (selector: Selector, x: string, y: string) => {
    /**
     * X coordinate
     * @type {Int}
     */
    const intX = parseInt(x, 10) || undefined;

    /**
     * Y coordinate
     * @type {Int}
     */
    const intY = parseInt(y, 10) || undefined;

    $(selector).moveTo({
        xOffset: intX,
        yOffset: intY,
    });
};
