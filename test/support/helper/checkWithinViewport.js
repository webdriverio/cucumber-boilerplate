module.exports = function (selector, falseCase, done) {
    this.browser.isVisibleWithinViewport(selector).then(function(isVisible) {
        if(falseCase) {
            isVisible.should.not.equal(true, 'Expected element "' + selector + '" to be outside the viewport, but is not');
        } else {
            isVisible.should.equal(true, 'Expected element "' + selector + '" to be inside the viewport, but is not');
        }
    }).call(done);
};
