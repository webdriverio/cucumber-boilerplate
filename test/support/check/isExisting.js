module.exports = (selector, falseCase, done) => {
    const elements = browser.elements(selector);

    if (falseCase) {
        expect(elements.value).to.have
            .length(0, `expected element "${elements}" not to exist`);
    } else {
        expect(elements.value).to.have.length
            .above(0, `expected element "${elements}" to exist`);
    }

    done();
};
