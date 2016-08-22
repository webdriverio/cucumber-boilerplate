/**
 * check content for specific element or input field
 */

module.exports = (type, element, falseCase, origText, done) => {
    var command = (type !== 'inputfield') ? 'getText' : 'getValue',
        text;

    // Check for empty element
    if (!done && typeof origText === 'function') {
        done = origText;
        origText = '';

        falseCase = !falseCase;
    }

    if (origText === undefined && falseCase === undefined) {
        origText = '';
        falseCase = true;
    }

    text = browser[command](element);

    if (falseCase) {
        origText.should.not.equal(text);
    } else {
        origText.should.equal(text);
    }

    done();
};
