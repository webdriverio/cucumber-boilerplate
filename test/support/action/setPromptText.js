module.exports = (modalText, done) => {
    try {
        browser.alertText(modalText);
    } catch (e) {
        assert(e, 'A prompt was not open when it should have been open');
    }

    done();
};
