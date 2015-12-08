/**
 * check position
 */

module.exports = function (elem, falseCase, position, axis, done) {
    this.browser
        .getLocation(elem, axis)
        .then(function (res) {
            position = parseInt(position, 10);

            if (falseCase) {
                res.should.not.equal(position, 'element ' + elem + ' should not be positioned at ' + position + 'px on the x axis');
            } else {
                res.should.equal(position, 'element ' + elem + ' should be positioned at ' + position + 'px on the x axis, but was found at ' + res + 'px');
            }

            return this;
        })
        .call(done);
};
