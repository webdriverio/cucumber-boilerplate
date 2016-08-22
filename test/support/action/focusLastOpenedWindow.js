module.exports = (type, done) => {
    var windowHandles = browser.windowHandles(),
        lastWindowHandle = windowHandles.value.slice(-1);

    browser.window(lastWindowHandle[0]);

    done();
};
