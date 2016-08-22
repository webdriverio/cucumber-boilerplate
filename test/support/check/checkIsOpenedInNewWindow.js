module.exports = (url, windowOrTab, done) => {
    // @TODO remove this
    browser.pause(5000)

    var windowHandles = browser.windowHandles(),
        lastWindowHandle = windowHandles.value.slice(-1),
        result,
        windowUrl;

    windowHandles.value.length.should.not.equal(1, "A popup was not opened");

    browser.window(lastWindowHandle[0]);

    result = browser.url();

    windowUrl = result.value;

    windowUrl.should.contain(url, 'The popup has a incorrect url');

    browser.close();

    done();
};
