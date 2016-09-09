module.exports = (elem, falseCase, className, done) => {
    const classesList = browser.getAttribute(elem, 'className').split(' ');

    if (falseCase === 'does not have') {
        expect(classesList).to.not
            .include(
                className,
                `Element ${elem} should not have the class ${className}`
            );
    } else {
        expect(classesList).to
            .include(
                className,
                `Element ${elem} should have the class ${className}`
            );
    }

    done();
};
