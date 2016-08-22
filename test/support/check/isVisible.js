/**
 * check if element is visible
 */

module.exports = (element, falseCase, done) => {
    var visible = browser.isVisible(element);

    if (falseCase) {
        visible.should.not.equal(true, 'expected element "' + element + '" not to be visible');
    } else {
        visible.should.equal(true, 'expected element "' + element + '" to be visible');
    }

    done();
};
