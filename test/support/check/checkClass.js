// /^I expect that element "$string" (has|does not have) the class "$string"$/

module.exports = function (elem, falseCase, className, done) {
    falseCase = (falseCase === 'does not have') ? true : false;

    this.browser
        .getAttribute(elem, 'className')
        .then(function (classes) {
            classes = classes.split(' ');

            if (falseCase) {
                expect(classes).to.not.include.keys(className, 'Element ' + elem + ' should not have the class ' + className);
            } else {
                expect(classes).to.not.keys(className, 'Element ' + elem + ' should have the class ' + className);
            }

            return this;
        })
        .call(done);
};
