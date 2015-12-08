/**
 * check if element is selected
 */

module.exports = function (element, falseCase, done) {
    this.browser
        .isSelected(element)
        .then(function (isSelected) {
            if (falseCase) {
                isSelected.should.not.equal(true, element + ' should not be selected');
            } else {
                isSelected.should.equal(true, element + ' should be selected');
            }
        })
        .call(done);
};
