module.exports = (screenWidth, screenHeight, done) => {
    browser.windowHandleSize({
        width: parseInt(screenWidth),
        height: parseInt(screenHeight)
    });

    browser.refresh();

    done();
};
