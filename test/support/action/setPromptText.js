module.exports = function (modalText, done) {
    this.browser
        .alertText(modalText)
        .then(function (text) {
            return this;
        }, function () {
            assert.ok(false, 'A prompt was not open when it should have been open');
        })
        .call(done);
};
