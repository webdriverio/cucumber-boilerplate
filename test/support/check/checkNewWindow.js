module.exports = function (type, falseCase, done) {
    this.browser
        .windowHandles()
        .then(function (windowHandles) {
            windowHandles = windowHandles.value;

            if (falseCase) {
                windowHandles.length.should.equal(1, "A new window should not have not been opened");
            } else {
                windowHandles.length.should.not.equal(1, "A new window has been opened");
            }

            return this;
        })
        .call(done);
};
