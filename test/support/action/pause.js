module.exports = function (ms, done) {
    this.browser
        .pause(ms)
        .call(done);
};
