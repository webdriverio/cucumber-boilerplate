module.exports = (elem, falseCase, done) => {
    var ms = 10000;

    falseCase = (falseCase) ? true : false;

    elem = browser.element(elem);
    elem.waitForVisible(ms, falseCase);

    done();
};
