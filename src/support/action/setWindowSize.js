/**
 * Resize the browser window
 * @param  {String}   screenWidth  The width of the window to resize to
 * @param  {String}   screenHeight The height of the window to resize to
 */
module.exports = (screenWidth, screenHeight) => {
    browser.setWindowSize(
        parseInt(screenWidth, 10),
        parseInt(screenHeight, 10)
    );
};
