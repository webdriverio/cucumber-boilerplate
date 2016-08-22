module.exports = (type, falseCase, done) => {
    var windowHandles = browser.windowHandles();

    falseCase = (falseCase === ' not') ? true : false;

    windowHandles = windowHandles.value;

    if (falseCase === true) {
        windowHandles.length.should.equal(1, "A new window should not have not been opened");
    } else {
        windowHandles.length.should.not.equal(1, "A new window has been opened");
    }

    done();
};
