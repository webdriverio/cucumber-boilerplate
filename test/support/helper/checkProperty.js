/**
 * check attribute or css property
 */

module.exports = function(isCSS, attrName, elem, falseCase, value, done) {
    var command = isCSS ? 'getCssProperty' : 'getAttribute';

    this.browser[command](elem, attrName, function(err,res) {
        should.not.exist(err);

        /**
         * when getting something with a color WebdriverIO returns a color
         * object but we want to assert against a string
         */
        if(attrName.indexOf('color') > -1) {
            res = res.value;
        }

        if(falseCase) {
            res.should.not.equal(value, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res);
        } else {
            res.should.equal(value, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res + ', but ' + value);
        }
    }).call(done);

};
