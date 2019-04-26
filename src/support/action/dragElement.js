/**
 * Drag a element to a given destination
 * @param  {String}   selector      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
module.exports = (selector, destination) => {
    $(selector).dragAndDrop($(destination));
};
