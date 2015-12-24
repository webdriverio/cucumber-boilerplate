/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
    this.browser
        .isEnabled(element)
        .then(function (enabled) {
            if (falseCase) {
                enabled.should.not.equal(true, 'expected element "' + element + '" not to be enabled');
            } else {
                enabled.should.equal(true, 'expected element "' + element + '" to be enabled');
            }
        })
        .call(done);
};
