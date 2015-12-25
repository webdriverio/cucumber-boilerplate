module.exports = function (action, modalType, done) {
    var command = 'alert' + action.slice(0, 1).toUpperCase() + action.slice(1);

    /**
     * Alertboxes can't be dismissed, this causes Chrome to crash during tests
     */
    if (modalType === 'alertbox') {
        command = 'alertAccept';
    }

    this.browser
        .then(function () {
            return this[command]();
        })
        .call(done);
};
