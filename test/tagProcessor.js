module.exports = (() => {
    'use strict'; // This is required since this file is not parsed with Babel

    let tags = ['~@Pending']; // Always ignore @Pending tags

    process.argv.forEach((val) => {
        if (val.indexOf('--tags=') === 0) {
            const collectedTags = val.replace('--tags=', '');

            tags = tags.concat(collectedTags);
        }
    });

    return tags;
})();
