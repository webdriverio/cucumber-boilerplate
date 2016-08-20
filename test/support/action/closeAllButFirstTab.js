var Q = require('q');

module.exports = function (windowType, done) {
    this.browser
        // Close all tabs but the first one - this should remain the last step
        .windowHandles()
        .then(function (windowHandles) {
            var handles = windowHandles.value,
                currentHandleNr = 0,
                browser = this;

            return handles.reduce(function(promise, handle) {
                return promise.then(function(result) {
                    currentHandleNr++;

                    if (currentHandleNr > 1) {
                        return browser.switchTab(handle).close();
                    }

                    return handle;
                });
            }, Q());
        })
        .call(done);
};
