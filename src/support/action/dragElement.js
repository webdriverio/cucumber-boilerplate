/**
 * Drag a element to a given destination
 * @param  {String}   source      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 * @param  {Function} done        Function to execute when finished
 */
module.exports = (source, destination, done) => {
    browser.dragAndDrop(source, destination);

    done();
};
