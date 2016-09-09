module.exports = (isCSS, attrName, elem, falseCase, value, done) => {
    const command = isCSS ? 'getCssProperty' : 'getAttribute';
    const attrType = (isCSS ? 'CSS attribute' : 'Attribute');

    let res = browser[command](elem, attrName);

    /**
     * when getting something with a color WebdriverIO returns a color
     * object but we want to assert against a string
     */
    if (attrName.indexOf('color') > -1) {
        res = res.value;
    }

    if (falseCase) {
        value.should.not
            .equal(
                res,
                `${attrType} of element "${elem}" should not contain "${res}"`
            );
    } else {
        value.should
            .equal(
                res,
                `${attrType} of element "${elem}" should not contain "${res}",
                but "${value}"`
            );
    }

    done();
};
