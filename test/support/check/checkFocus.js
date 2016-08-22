module.exports = (selector, falseCase, done) => {
    var isExisting = browser.isExisting(selector + ":focus");

    if (falseCase) {
        isExisting.should.not.equal(true, "Expected element to not be focused, but it is");
    } else {
        isExisting.should.equal(true, "Expected element to be focused, but it is not");
    }

    done();
};
