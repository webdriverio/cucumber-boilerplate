/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = (selector) => {
    $(selector).scrollIntoView();
};
