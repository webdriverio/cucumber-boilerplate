module.exports = (falseCase, path, done) => {
    const result = browser.url();
    const domain = browser.options.baseUrl;

    // Remove the domain from the url
    if (result.value.indexOf(domain) === 0) {
        result.value = result.value.replace(domain, '');
    }

    if (falseCase) {
        result.value.should.not
            .equal(path, `expected path not to be "${result.value}"`);
    } else {
        result.value.should
            .equal(
                path,
                `expected path to be "${path}" but found "${result.value}"`
            );
    }

    done();
};
