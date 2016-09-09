module.exports = (type, falseCase, done) => {
    const windowHandles = browser.windowHandles().value;

    if (falseCase === ' not') {
        windowHandles.length.should
            .equal(1, 'A new window should not have not been opened');
    } else {
        windowHandles.length.should.not
            .equal(1, 'A new window has been opened');
    }

    done();
};
