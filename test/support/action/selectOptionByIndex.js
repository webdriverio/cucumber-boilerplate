module.exports = function (index, indexSuffix, selectElem, done) {
    this.browser
        .selectByIndex(selectElem, +index)
        .call(done);
};
