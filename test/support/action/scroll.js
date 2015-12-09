module.exports = function (selector, done) {
    this.browser
        .waitForExist(selector, 15000)
        .then(function (result) {
            return this
                .scroll(selector);
        })
        .call(done);
};
