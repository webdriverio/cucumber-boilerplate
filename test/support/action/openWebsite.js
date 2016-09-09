module.exports = (type, page, done) => {
    const url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);

    done();
};
