/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 * @param  {Function} done     Function to execute when finished
 */
module.exports = (selector, done) => {
    // @TODO remove this
    browser.waitForExist(selector, 15000);

    browser.scroll(selector);

    done();
};
