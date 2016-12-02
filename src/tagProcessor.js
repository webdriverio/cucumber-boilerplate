/**
 * Parse the tags from the CLI to pass to Cucumber
 * @param  {Object} consoleArguments The arguments to parse from the console
 * @return {Array}                   The tags to process
 */
module.exports = (consoleArguments) => {
    // This is required since this file is not parsed with Babel

    'use strict';

    /**
     * The tags to pass to the cucumber options
     * @type {Array}
     */
    let tags = ['~@Pending']; // Always ignore @Pending tags

    consoleArguments.forEach((val) => {
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
};
