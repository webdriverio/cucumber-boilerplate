/**
 * check content for specific element or input field
 */

module.exports = function(type, element, falseCase, origText, done) {
    var command = (type !== 'inputfield')
                    ? 'getText'
                    : 'getValue';

    this.browser[command](element)
        .then(function(text) {
            if(falseCase) {
                origText.should.not.equal(text);
            } else {
                origText.should.equal(text);
            }

        })
        .call(done);
};
