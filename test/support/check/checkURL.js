/**
 * check url
 */

module.exports = function (falseCase, url, done) {
    this.browser
        .url(function (err,result) {
            should.not.exist(err);

            if (falseCase) {
                result.value.should.not.equal(url, 'expected url not to be ' + result.value);
            } else {
                result.value.should.equal(url, 'expected url to be "' + url + '"  but found "' + result.value + '"');
            }

        })
        .call(done);
};
