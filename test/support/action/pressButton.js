module.exports = function (key, done) {
    this.browser
        .keys(key)
        .call(done);
};
