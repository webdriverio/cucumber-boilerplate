/**
 * check width and height
 */

module.exports = function (elem, falseCase, size, dimension, done) {
    this.browser
        .getElementSize(elem)
        .then(function (res) {
            var check = res.height,
                label = 'height';

            if (dimension === 'broad') {
                check = res.width;
                label = 'width';
            }

            size = parseInt(size, 10);

            if (falseCase) {
                check.should.not.equal(size, 'element ' + elem + ' should not have a ' + label + ' of ' + size + 'px');
            } else {
                check.should.equal(size, 'Element ' + elem + ' should have a ' + label + ' of ' + size + 'px, but is ' + check + 'px');
            }

            return this;
        })
        .call(done);
};
