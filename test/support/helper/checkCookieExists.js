/**
 * check cookie content
 */

module.exports = function (name, falseCase, done) {

    this.browser.getCookie(name, function(err,cookie) {
        should.not.exist(err);

        if(falseCase) {
            expect(cookie).to.be.null;
        } else {
            expect(cookie).not.to.be.null;
        }
    }).call(done);

}
