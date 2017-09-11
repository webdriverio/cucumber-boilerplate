/**
 * Wait for the given element to become visible
 * @param  {String}   elem      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 *
 * @todo  merge with waitfor
 */
module.exports = (elem, falseCase) => {
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = 10000;

    browser.waitForVisible(elem, ms, !!falseCase);
};
