/**
 * Clear a given input field
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */
module.exports = (element, done) => {
    browser.clearElement(element);

    done();
};
