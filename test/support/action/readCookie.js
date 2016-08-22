module.exports = (name, done) => {
    browser.deleteCookie(name);

    done();
};
