/**
 * Resize the browser window
 * @param  {String}   screenWidth  The width of the window to resize to
 * @param  {String}   screenHeight The height of the window to resize to
 * @param  {Function} done         Function to execute when finished
 */
module.exports = (screenWidth, screenHeight, done) => {
    browser.windowHandleSize({
        width: parseInt(screenWidth, 10),
        height: parseInt(screenHeight, 10),
    });

    done();
};
