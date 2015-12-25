/**
 * Check text content for specific element or input field
 */
// jshint -W030
module.exports = function (type, element, falseCase, done) {
    var command = (type !== 'inputfield') ? 'getText' : 'getValue';

    this.browser[command](element)
        .then(function (text) {
            if (falseCase) {
                expect(text).to.not.be.empty;
            } else {
                expect(text).to.be.empty;
            }
        })
        .call(done);
};
