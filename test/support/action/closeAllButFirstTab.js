module.exports = (windowType, done) => {
    // Get all the window handles
    const windowHandles = browser.windowHandles();
    const handles = windowHandles.value;

    let currentHandleNr = 0;

    // Close all tabs but the first one
    handles.forEach((handle) => {
        currentHandleNr++;

        if (currentHandleNr > 1) {
            browser.switchTab(handle).close();
        }
    });

    done();
};
