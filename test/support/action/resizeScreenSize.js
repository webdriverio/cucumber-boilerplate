module.exports = (screenWidth, screenHeight, done) => {
    browser.windowHandleSize({
        width: parseInt(screenWidth, 10),
        height: parseInt(screenHeight, 10),
    });

    browser.refresh();

    done();
};
