/**
 * check if element exists
 */

module.exports = (isExisting, elem, done) => {
    var res = browser.elements(elem);

    isExisting = (isExisting === 'an');

    if (isExisting) {
        expect(res.value).to.have.length.above(0, 'element with selector "' + elem + '" should exist on the page');
    } else {
        expect(res.value).to.have.length(0, 'element with selector "' + elem + '" should not exist on the page');
    }

    done();
};
