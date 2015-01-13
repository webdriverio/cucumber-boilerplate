/**
 * check cookie content
 */

module.exports = function (name, falseCase, value, done) {

    this.browser.getCookie(name, function(err,cookie) {
        should.not.exist(err);
        cookie.name.should.equals(name, 'no cookie found with the name "' + name + '"');

        if(falseCase) {
            cookie.value.should.not.equal(value, 'expected cookie "' + name + '" not to have value ' + value);
        } else {
            cookie.value.should.equal(value, 'expected cookie "' + name + '" to have value ' + value + ' but got ' + cookie.value);
        }
    }).call(done);

};
