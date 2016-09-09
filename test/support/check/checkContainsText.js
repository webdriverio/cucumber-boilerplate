module.exports = (type, element, falseCase, done) => {
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';
    const text = browser[command](element);

    if (falseCase) {
        expect(text).to.not.be.empty();
    } else {
        expect(text).to.be.empty();
    }

    done();
};
