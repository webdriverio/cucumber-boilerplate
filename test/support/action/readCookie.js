module.exports = function (name, done) {
    this.browser
        .deleteCookie(name)
        .call(done);
};
