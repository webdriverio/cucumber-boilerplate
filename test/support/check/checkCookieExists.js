module.exports = (name, falseCase, done) => {
    const cookie = browser.getCookie(name);

    if (falseCase) {
        assert.isNull(
            cookie,
            `A cookie with the name "${name}" was found`
        );
    } else {
        assert.isNotNull(
            cookie,
            `A cookie with the name "${name}" was not found`
        );
    }

    done();
};
