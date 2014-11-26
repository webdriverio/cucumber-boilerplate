/**
 * check attribute or css property
 */

module.exports = function(isCSS, attrName, elem, falseCase, value, done) {
    var command = isCSS ? 'getCssProperty' : 'getAttribute';

    browser[command](elem, attrName, function(err,res) {
        should.not.exist(err);

        if(falseCase) {
            res.should.not.equal(value, (isCSS ? 'CSS ' : '') + 'Attribut des Elementes ' + elem + ' sollte nicht den Wert ' + res + ' besitzen');
        } else {
            res.should.equal(value, (isCSS ? 'CSS ' : '') + 'Attribut des Elementes ' + elem + ' sollte nicht den Wert ' + res + ' besitzen, sondern ' + value);
        }
    }).call(done);

};