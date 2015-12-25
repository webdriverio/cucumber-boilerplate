module.exports = function (type, page, done) {
    var url = (type === 'url') ? page : this.baseUrl + page;

    this.browser
        .url(url)
        .call(done);
};
