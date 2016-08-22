var Q = require('q');

module.exports = (windowType, done) => {
    // Get all the window handles
    var windowHandles = browser.windowHandles(),
        handles = windowHandles.value,
        currentHandleNr = 0;

    // Close all tabs but the first one
    handles.forEach((handle) => {
        currentHandleNr++;

        if (currentHandleNr > 1) {
            browser.switchTab(handle).close();
        }
    });

    done();
};
