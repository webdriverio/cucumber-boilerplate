module.exports = (method, text, element, done) => {
    var command = (method === 'add') ? 'addValue' : 'setValue';

    browser[command](element, text);

    done();
};
