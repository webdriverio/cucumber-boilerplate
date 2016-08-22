/**
 * compare content of two elements
 */

module.exports = (element1, falseCase, element2, done) => {
    var text1 = browser.getText(element1),
        text2 = browser.getText(element2);

    if (falseCase) {
        text1.should.not.equal(text2, 'expected text not to be ' + text1);
    } else {
        text1.should.equal(text2, 'expected text to be "' + text1 + '"  but found "' + text2 + '"');
    }

    done();
};
