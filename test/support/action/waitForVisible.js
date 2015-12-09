module.exports = function (elem, falseCase, done) {
    var ms = 5000;

    falseCase = (falseCase) ? true : false;

    this.browser
        .waitForVisible(elem, ms, falseCase)
        .call(done);
};
