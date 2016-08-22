/**
 * Check text content for specific element or input field
 */
// jshint -W030
module.exports = (type, element, falseCase, done) => {
    var command = (type !== 'inputfield') ? 'getText' : 'getValue',
        text = browser[command](element)

    if (falseCase) {
        expect(text).to.not.be.empty;
    } else {
        expect(text).to.be.empty;
    }

    done();
};
