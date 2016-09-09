module.exports = (isExisting, elem, done) => {
    const nrOfElements = browser.elements(elem).value;

    if (isExisting === 'an') {
        expect(nrOfElements).to.have.length
            .above(
                0,
                `element with selector "${elem}" should exist on the page`
            );
    } else {
        expect(nrOfElements).to.have
            .length(
                0,
                `element with selector "${elem}" should not exist on the page`
            );
    }

    done();
};
