/**
 * check position
 */

module.exports = (elem, falseCase, position, axis, done) => {
    var res = browser.getLocation(elem, axis);

    position = parseInt(position, 10);

    if (falseCase) {
        res.should.not.equal(position, 'element ' + elem + ' should not be positioned at ' + position + 'px on the x axis');
    } else {
        res.should.equal(position, 'element ' + elem + ' should be positioned at ' + position + 'px on the x axis, but was found at ' + res + 'px');
    }

    done();
};
