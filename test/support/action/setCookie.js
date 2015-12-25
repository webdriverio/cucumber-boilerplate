module.exports = function (name, content, done) {
    this.browser
        .setCookie({
            name: name,
            value: content
        })
        .call(done);
};
