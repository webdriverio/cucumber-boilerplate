module.exports = (falseCase, value, done) => {
    const result = browser.url();

    if (falseCase) {
        result.value.should.not
            .contain(
                value,
                `Expected URL "${result.value}" not to contain "${value}"`
            );
    } else {
        result.value.should
            .contain(
                value,
                `Expected URL "${result.value}" to contain "${value}"`
            );
    }

    done();
};
