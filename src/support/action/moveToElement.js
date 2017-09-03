/**
 * Move to the given element with an optional offset on a X and Y position
 * @param  {String}   element  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
module.exports = (element, x, y) => {
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

    browser.moveToObject(element, intX, intY);
};
