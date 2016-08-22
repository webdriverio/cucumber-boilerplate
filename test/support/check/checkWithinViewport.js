module.exports = (selector, falseCase, done) => {
    var isVisible = browser.isVisibleWithinViewport(selector);

    if (falseCase) {
        isVisible.should.not.equal(true, 'Expected element "' + selector + '" to be outside the viewport, but it is not');
    } else {
        isVisible.should.equal(true, 'Expected element "' + selector + '" to be inside the viewport, but it is not');
    }

    done();
};
