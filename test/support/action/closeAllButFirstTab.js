module.exports = function (done) {
    this.browser
        // Close all tabs but the first one - this should remain the last step
        .windowHandles()
        .then(function (windowHandles) {
            var handles = windowHandles.value,
                handlesLength = handles.length,
                currentHandleNr;

            if (handlesLength > 1) {
                for (currentHandleNr = 1; currentHandleNr < handlesLength; currentHandleNr++) {
                    return this
                        .close(handles[currentHandleNr]);
                }
            }

            return this;
        })
        .call(done);
};
