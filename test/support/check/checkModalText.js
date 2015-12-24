module.exports = function (modalType, falseState, modalText, done) {
    this.browser
        .alertText()
        .then(function (text) {
            if (falseState) {
                text.should.not.equal(modalText);
            } else {
                text.should.equal(modalText);
            }
        }, function () {
            assert.ok(false, 'A ' + modalType + ' was not opened when it should have been opened');
        })
        .call(done);
};
