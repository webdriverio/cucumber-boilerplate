module.exports = function (selector, falseCase, done) {
    this.browser
        .isExisting(selector + ":focus")
        .then(function (isExisting) {
            if (falseCase) {
                isExisting.should.not.equal(true, "Expected element to not be focused, but it is");
            } else {
                isExisting.should.equal(true, "Expected element to be focused, but it is not");
            }

            return this;
        })
        .call(done);
};
