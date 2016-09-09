module.exports = (ms, done) => {
    const intMs = parseInt(ms, 10);

    browser.pause(intMs);

    done();
};
