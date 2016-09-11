/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (modalText, done) => {
    try {
        browser.alertText(modalText);
    } catch (e) {
        assert(e, 'A prompt was not open when it should have been open');
    }

    done();
};
