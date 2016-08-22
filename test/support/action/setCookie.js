module.exports = (name, content, done) => {
    browser.setCookie({
        name: name,
        value: content
    });

    done();
};
