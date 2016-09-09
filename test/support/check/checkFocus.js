module.exports = (selector, falseCase, done) => {
    const isHasfocus = browser.hasFocus(selector);

    if (falseCase) {
        isHasfocus.should.not
            .equal(true, 'Expected element to not be focused, but it is');
    } else {
        isHasfocus.should
            .equal(true, 'Expected element to be focused, but it is not');
    }

    done();
};
