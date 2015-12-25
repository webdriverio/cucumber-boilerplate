/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
    this.browser
        .isVisible(element)
        .then(function (visible) {
            if (falseCase) {
                visible.should.not.equal(true, 'expected element "' + element + '" not to be visible');
            } else {
                visible.should.equal(true, 'expected element "' + element + '" to be visible');
            }
        })
        .call(done);
};
