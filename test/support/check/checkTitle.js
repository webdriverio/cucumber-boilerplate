/**
 * check title
 */

module.exports = (falseCase, docTitle, done) => {
    var title = browser.getTitle();

    if (falseCase) {
        title.should.not.equal(docTitle, 'expected title not to be ' + docTitle);
    } else {
        title.should.equal(docTitle, 'expected title to be "' + docTitle + '"  but found "' + title + '"');
    }

    done();
};
