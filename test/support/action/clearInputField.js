module.exports = function (element, done) {
    this.browser
        .clearElement(element)
        .call(done);
};
