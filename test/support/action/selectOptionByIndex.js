module.exports = (index, indexSuffix, selectElem, done) => {
    browser.selectByIndex(selectElem, +index);

    done();
};
