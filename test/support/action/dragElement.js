module.exports = function (source, destination, done) {
    this.browser
        .dragAndDrop(source, destination, this.noError)
        .call(done);
};
