module.exports = (modalType, falseState, done) => {
    var alertText;

    try {
        alertText = browser.alertText();

        if (falseState) {
            alertText.not.to.equal(null, 'A ' + modalType + ' was opened when it shouldn\'t');
        }
    } catch(e) {
        if (!falseState) {
            assert(alertText === null, 'A ' + modalType + ' was not opened when it should have been opened');
        }
    }

    done();
};
