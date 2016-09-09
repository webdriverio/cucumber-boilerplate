module.exports = (elem, falseCase, position, axis, done) => {
    const res = browser.getLocation(elem, axis);
    const intPosition = parseInt(position, 10);

    if (falseCase) {
        res.should.not
            .equal(
                intPosition,
                `element "${elem}" should not be positioned at ${intPosition}px
                on the x axis`
            );
    } else {
        res.should
            .equal(
                intPosition,
                `element "${elem}" should be positioned at ${intPosition}px
                on the x axis, but was found at ${res}px`
            );
    }

    done();
};
