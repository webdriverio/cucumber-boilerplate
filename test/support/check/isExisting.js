/**
 * check if element is visible
 */

module.exports = function (selector, falseCase, done) {
    this.browser
        .elements(selector)
        .then(function (elements) {
            if (falseCase) {
                expect(elements.value).to.have.length(0, 'expected element "' + elements + '" not to exist');
            } else {
                expect(elements.value).to.have.length.above(0, 'expected element "' + elements + '" to exist');
            }
        })
        .call(done);
};
