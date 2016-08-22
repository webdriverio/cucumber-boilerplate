module.exports = (type, page, done) => {
    var url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);

    done();
};
