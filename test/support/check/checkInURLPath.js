module.exports = function (falseCase, value, done) {
    this.browser
        .url()
        .then(function (result) {
            if (falseCase) {
                result.value.should.not.contain(value, 'Expected URL (' + result.value + ') not to contain "' + value + '"');
            } else {
                result.value.should.contain(value, 'Expected URL (' + result.value + ') to contain "' + value + '"');
            }

            return this;
        })
        .call(done);
};
