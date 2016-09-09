module.exports = (modalType, falseState, modalText, done) => {
    try {
        const text = browser.alertText();

        if (falseState) {
            text.should.not.equal(modalText);
        } else {
            text.should.equal(modalText);
        }
    } catch (e) {
        assert(
            e,
            `A ${modalType} was not opened when it should have been opened`
        );
    }

    done();
};
