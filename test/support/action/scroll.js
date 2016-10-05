/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 * @param  {Function} done     Function to execute when finished
 */
module.exports = (selector, done) => {
    browser.scroll(selector);

    done();
};
