module.exports = function (type, done) {
    this.browser
        .windowHandles()
        .then(function (windowHandles) {
            var lastWindowHandle = windowHandles.value.slice(-1);

            return this
                .window(lastWindowHandle[0])
                .close();
        })
        .call(done);
};
