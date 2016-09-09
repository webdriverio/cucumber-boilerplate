module.exports = (element, falseCase, done) => {
    const enabled = browser.isEnabled(element);

    if (falseCase) {
        enabled.should.not
            .equal(true, `expected element "${element}" not to be enabled`);
    } else {
        enabled.should
            .equal(true, `expected element "${element}" to be enabled`);
    }

    done();
};
