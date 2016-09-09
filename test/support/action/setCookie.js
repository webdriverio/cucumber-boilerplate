module.exports = (cookieName, cookieContent, done) => {
    browser.setCookie({
        name: cookieName,
        value: cookieContent,
    });

    done();
};
