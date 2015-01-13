/**
 * check title
 */

module.exports = function (falseCase, docTitle, done) {

    this.browser.getTitle(function(err, title) {
        should.not.exist(err);

        if(falseCase) {
            title.should.not.equal(docTitle, 'expected title not to be ' + docTitle);
        } else {
            title.should.equal(docTitle, 'expected title to be "' + docTitle + '"  but found "' + title + '"');
        }

    }).call(done);

};
