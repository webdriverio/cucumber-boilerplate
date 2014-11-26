var Yadda   = require('yadda'),
    English = Yadda.localisation.English,
    fs      = require('fs'),
    chai    = require('chai');

module.exports = (function() {

    var library = English.library(),
        dictionary = new Yadda.Dictionary(),
        steps = fs.readdirSync(__dirname + '/steps');

    /**
     * define regex helpers
     */
    dictionary.define('string','([^"]*)?');

    /**
     * define step library
     */
    steps.forEach(function(step) {
        require('./steps/' + step).call(library,dictionary);
    });

    return library;

})();