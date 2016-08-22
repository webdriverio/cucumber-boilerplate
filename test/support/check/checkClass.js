// /^I expect that element "$string" (has|does not have) the class "$string"$/

module.exports = (elem, falseCase, className, done) => {
    var classes = browser.getAttribute(elem, 'className');

    falseCase = (falseCase === 'does not have') ? true : false;

    classes = classes.split(' ');

    if (falseCase) {
        expect(classes).to.not.include(className, 'Element ' + elem + ' should not have the class ' + className);
    } else {
        expect(classes).to.include(className, 'Element ' + elem + ' should have the class ' + className);
    }

    done();
};
