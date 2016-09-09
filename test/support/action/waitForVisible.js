module.exports = (elem, falseCase, done) => {
    const ms = 10000;

    const element = browser.element(elem);

    element.waitForVisible(ms, falseCase);

    done();
};
