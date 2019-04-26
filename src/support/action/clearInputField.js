/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
module.exports = (selector) => {
    $(selector).clearValue();
};
