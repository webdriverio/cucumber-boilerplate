var Cucumber = require('cucumber');

module.exports = (function() {
    var tags = ['~@Pending']; // Always ignore @Pending tags

    process.argv.forEach(function (val, index, array) {
        if (val.indexOf('--tags=') === 0) {
            val = val.replace('--tags=', '');

            tags = tags.concat(val);
        }
    });

    return tags;
})();
