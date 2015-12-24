var Q = require('q');

module.exports = function (windowType, done) {
    this.browser
        // Close all tabs but the first one - this should remain the last step
        .windowHandles()
        .then(function (windowHandles) {
            var handles = windowHandles.value,
                currentHandleNr = 0,
                browser = this;

            return Q.all(handles.map(function (handle) {
                        currentHandleNr++;

                        if (currentHandleNr > 1) {
                            return browser.close();
                        }

                        return handle;
                    }
                )
            );
        })
        .call(done);
};
