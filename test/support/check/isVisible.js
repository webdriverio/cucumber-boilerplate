module.exports = (element, falseCase, done) => {
    const visible = browser.isVisible(element);

    if (falseCase) {
        visible.should.not
            .equal(true, `expected element "${element}" not to be visible`);
    } else {
        visible.should
            .equal(true, `expected element "${element}" to be visible`);
    }

    done();
};
