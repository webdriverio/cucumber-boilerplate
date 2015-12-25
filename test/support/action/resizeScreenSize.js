module.exports = function (screenWidth, screenHeight, done) {
    this.browser
        .windowHandleSize({
            width: parseInt(screenWidth),
            height: parseInt(screenHeight)
        })
        .refresh()
        .call(done);
};
