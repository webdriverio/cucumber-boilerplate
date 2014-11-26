/**
 * check cookie content
 */

module.exports = function (obsolete ,name, falseCase, done) {
    browser.getCookie(name, function(err,cookie) {
        should.not.exist(err);

        if(falseCase) {
            expect(cookie).to.be.null;
        } else {
            expect(cookie).not.to.be.null;
        }
    }).call(done);
}