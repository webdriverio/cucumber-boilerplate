module.exports = (selector, done) => {
    browser.waitForExist(selector, 15000);

    browser.scroll(selector);

    done();
};
