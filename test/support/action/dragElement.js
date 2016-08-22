module.exports = (source, destination, done) => {
    browser.dragAndDrop(source, destination);

    done();
};
