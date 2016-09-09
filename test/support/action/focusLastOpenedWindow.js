module.exports = (type, done) => {
    const windowHandles = browser.windowHandles();
    const lastWindowHandle = windowHandles.value.slice(-1);

    browser.window(lastWindowHandle[0]);

    done();
};
