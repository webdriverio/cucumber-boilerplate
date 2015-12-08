/**
 * check cookie content
 */
// jshint -W030
module.exports = function (name, falseCase, done) {
    this.browser
        .getCookie(name)
        .then(function (cookie) {
            if (falseCase) {
                expect(cookie).to.be.null;
            } else {
                expect(cookie).not.to.be.null;
            }
        })
        .call(done);
};
