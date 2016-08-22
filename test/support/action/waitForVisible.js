module.exports = (elem, falseCase, done) => {
    var ms = 5000;

    falseCase = (falseCase) ? true : false;

    browser.waitForVisible(elem, ms, falseCase);

    done();
};
