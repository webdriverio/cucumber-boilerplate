/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default (selector) => {
    $(selector).scrollIntoView();
};
