/**
 * check if link contains $string
 */

module.exports = function (selector, falseCase, text, done) {

    this.browser.getAttribute(selector, 'href', function (err, link) {
        should.not.exist(err);

        if(falseCase) {
            link.should.not.contain(text);
        } else {
            link.should.contain(text);
        }

    }).call(done);

};
