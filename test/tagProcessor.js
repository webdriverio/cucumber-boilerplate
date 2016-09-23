/**
 * Parse the tags from the CLI to pass to Cucumber
 * @return {Array} The tags to process
 */
module.exports = (() => {
    'use strict'; // This is required since this file is not parsed with Babel

    /**
     * The tags to pass to the cucumber options
     * @type {Array}
     */
    let tags = ['~@Pending']; // Always ignore @Pending tags

    process.argv.forEach((val) => {
        if (val.indexOf('--tags=') === 0) {
            /**
             * The collected tags from the CLI param
             * @type {String}
             */
            const collectedTags = val.replace('--tags=', '');

            tags = tags.concat(collectedTags);
        }
    });

    return tags;
})();
