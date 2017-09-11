import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector
 */
module.exports = (method, value, element) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';

    let checkValue = value;

    checkIfElementExists(element, false, 1);

    if (!value) {
        checkValue = '';
    }

    browser[command](element, checkValue);
};
