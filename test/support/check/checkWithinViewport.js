module.exports = (selector, falseCase, done) => {
    const isVisible = browser.isVisibleWithinViewport(selector);

    if (falseCase) {
        isVisible.should.not
            .equal(
                true,
                `Expected element "${selector}" to be outside the viewport`
            );
    } else {
        isVisible.should
            .equal(
                true,
                `Expected element "${selector}" to be inside the viewport`
            );
    }

    done();
};
