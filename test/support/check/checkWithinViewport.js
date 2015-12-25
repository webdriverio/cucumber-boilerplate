module.exports = function (selector, falseCase, done) {
    this.browser
        .isVisibleWithinViewport(selector)
        .then(function (isVisible) {
            if (falseCase) {
                isVisible.should.not.equal(true, 'Expected element "' + selector + '" to be outside the viewport, but it is not');
            } else {
                isVisible.should.equal(true, 'Expected element "' + selector + '" to be inside the viewport, but it is not');
            }
        })
        .call(done);
};
