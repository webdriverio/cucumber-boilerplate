module.exports = (type, element, falseCase, origText, done) => {
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    let doneCallback = done;
    let origionalText = origText;
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (!doneCallback && typeof origionalText === 'function') {
        doneCallback = origionalText;
        origionalText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (origionalText === undefined && falseCase === undefined) {
        origionalText = '';
        boolFalseCase = true;
    }

    const text = browser[command](element);

    if (boolFalseCase) {
        origionalText.should.not.equal(text);
    } else {
        origionalText.should.equal(text);
    }

    doneCallback();
};
