module.exports = (elem, falseCase, size, dimension, done) => {
    const res = browser.getElementSize(elem);
    const intSize = parseInt(size, 10);

    let check = res.height;
    let label = 'height';

    if (dimension === 'broad') {
        check = res.width;
        label = 'width';
    }

    if (falseCase) {
        check.should.not
            .equal(
                intSize,
                `element "${elem}" should not have a ${label} of ${intSize}px`
            );
    } else {
        check.should
            .equal(
                intSize,
                `Element "${elem}" should have a ${label} of ${intSize}px,
                but is ${check}px`
            );
    }

    done();
};
