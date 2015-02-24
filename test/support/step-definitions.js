var Yadda = require('yadda'),
    English = Yadda.localisation.English,
    fs = require('fs'),
    path = require('path'),
    chai = require('chai');

module.exports = (function() {

    var library = English.library(),
        dictionary = new Yadda.Dictionary(),
        stepsFiles = path.join(__dirname, '..', 'steps'),
        steps = fs.readdirSync(stepsFiles);

    /**
     * define regex helpers
     */
    dictionary.define('string', '([^"]*)?');

    /**
     * define step library
     */
    steps.forEach(function(step) {
        require(path.join(stepsFiles, step)).call(library, dictionary);
    });

    return library;

})();
