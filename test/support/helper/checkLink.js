/**
 * check if link contains $string
 */

module.exports = function (selector, falseCase, partLink, done) {

    this.browser.getAttribute(selector, 'href', function (err, link) {
        should.not.exist(err);

        if(falseCase) {
            partLink.should.not.contain(link);
        } else {
            partLink.should.contain(link);
        }

    }).call(done);

};
