/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {

    this.browser.isVisible(element, function (err, visible) {
        should.not.exist(err);

        if(falseCase) {
            visible.should.not.equal(true, 'expected element "' + element + '" not to be visible');
        } else {
            visible.should.equal(true, 'expected element "' + element + '" to be visible');
        }

    }).call(done);

};
