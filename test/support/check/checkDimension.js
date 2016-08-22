/**
 * check width and height
 */

module.exports = (elem, falseCase, size, dimension, done) => {
    var res = browser.getElementSize(elem),
        check = res.height,
        label = 'height';

    size = parseInt(size, 10);

    if (dimension === 'broad') {
        check = res.width;
        label = 'width';
    }

    if (falseCase) {
        check.should.not.equal(size, 'element ' + elem + ' should not have a ' + label + ' of ' + size + 'px');
    } else {
        check.should.equal(size, 'Element ' + elem + ' should have a ' + label + ' of ' + size + 'px, but is ' + check + 'px');
    }

    done();
};
