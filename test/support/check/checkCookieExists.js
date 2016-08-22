/**
 * check cookie content
 */

module.exports = (name, falseCase, done) => {
    var cookie = browser.getCookie(name);

    if (falseCase) {
        expect(cookie).to.be.null;
    } else {
        expect(cookie).not.to.be.null;
    }

    done();
};
