/**
 * check url
 */

module.exports = (falseCase, expectedUrl, done) => {
    var result = browser.url();

    if (falseCase) {
        result.value.should.not.equal(expectedUrl, 'expected url not to be ' + result.value);
    } else {
        result.value.should.equal(expectedUrl, 'expected url to be "' + expectedUrl + '"  but found "' + result.value + '"');
    }

    done();
};
