module.exports = (name, falseCase, value, done) => {
    const cookie = browser.getCookie(name);

    cookie.name.should.equals(name, `no cookie found with the name "${name}"`);

    if (falseCase) {
        cookie.value.should.not
            .equal(
                value,
                `expected cookie "${name}" not to have value ${value}`
            );
    } else {
        cookie.value.should
            .equal(
                value,
                `expected cookie "${name}" to have value ${value}
                but got ${cookie.value}`
            );
    }

    done();
};
