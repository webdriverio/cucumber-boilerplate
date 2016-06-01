var Yadda = require('yadda'),
    config = require('./configure'),
    language = Yadda.localisation[upperCaseFirstLetter(config.language)],
    fs = require('fs'),
    glob = require('glob'),
    path = require('path'),
    chai = require('chai');

module.exports = (function () {
    var library = language.library(),
        dictionary = new Yadda.Dictionary(),
        stepsFiles = path.join(__dirname, '..', 'steps', '**', '*.js'),
        steps = glob.sync(stepsFiles);

    /**
     * define regex helpers
     */
    dictionary.define('string', '([^"]*)?');

    /**
     * define step library
     */
    steps.forEach(function (step) {
        require(step).call(library, dictionary);
    });

    return library;

})();

function upperCaseFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}
