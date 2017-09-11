/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
module.exports = (modalText) => {
    try {
        browser.alertText(modalText);
    } catch (e) {
        assert(e, 'A prompt was not open when it should have been open');
    }
};
