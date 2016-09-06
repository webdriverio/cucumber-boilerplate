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
        value.should.not.equal(res, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res);
    } else {
        value.should.equal(res, (isCSS ? 'CSS ' : '') + 'attribute of element ' + elem + ' should not contain ' + res + ', but ' + value);
    }

    done();
};
