/**
 * Move to the given element with an optional offset on a X and Y position
 * @param  {String}   element  Element selector
 * @param  {String}   obsolete If we need to add an offset this is set
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 * @param  {Function} done     Function to execute when finished
 */
module.exports = (element, obsolete, x, y, done) => {
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

    done();
};
