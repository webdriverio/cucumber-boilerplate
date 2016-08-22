module.exports = (ms, done) => {
    ms = parseInt(ms, 10);

    browser.pause(ms);

    done();
};
