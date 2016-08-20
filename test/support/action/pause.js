module.exports = function (ms, done) {
    ms = parseInt(ms, 10);

    this.browser
        .pause(ms)
        .call(done);
};
