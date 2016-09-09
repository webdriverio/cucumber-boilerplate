module.exports = (url, windowOrTab, done) => {
    const windowHandles = browser.windowHandles();
    const lastWindowHandle = windowHandles.value.slice(-1);

    windowHandles.value.length.should.not.equal(1, 'A popup was not opened');

    browser.window(lastWindowHandle[0]);

    const windowUrl = browser.url().value;

    windowUrl.should.contain(url, 'The popup has a incorrect url');

    browser.close();

    done();
};
