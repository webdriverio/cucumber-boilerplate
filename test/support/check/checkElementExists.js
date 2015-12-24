/**
 * check if element exists
 */

module.exports = function (isExisting, elem, done) {
    isExisting = (isExisting === 'an');

    this.browser
        .elements(elem)
        .then(function (res) {
            if (isExisting) {
                expect(res.value).to.have.length.above(0, 'element with selector "' + elem + '" should exist on the page');
            } else {
                expect(res.value).to.have.length(0, 'element with selector "' + elem + '" should not exist on the page');
            }
        })
        .call(done);
};
