module.exports = function (url, windowOrTab, done) {
    this.browser
        .pause(5000)
        .windowHandles()
        .then(function (windowHandles) {
            var lastWindowHandle = windowHandles.value.slice(-1);

            windowHandles.value.length.should.not.equal(1, "A popup was not opened");

            return this
                .window(lastWindowHandle[0])
                .url();
        })
        .then(function (result) {
            var windowUrl = result.value;

            windowUrl.should.contain(url, 'The popup has a incorrect url');

            return this.close();
        })
        .call(done);
};
