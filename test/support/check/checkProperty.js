/**
 * check attribute or css property
 */

module.exports = (isCSS, attrName, elem, falseCase, value, done) => {
    var command = isCSS ? 'getCssProperty' : 'getAttribute',
        res = browser[command](elem, attrName);

    /**
     * when getting something with a color WebdriverIO returns a color
     * object but we want to assert against a string
     */
    if (attrName.indexOf('color') > -1) {
        res = res.value;
    }

    if (falseCase) {
        res.should.not.equal(value, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res);
    } else {
        res.should.equal(value, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res + ', but ' + value);
    }

    done();
};
