module.exports = (method, text, element, done) => {
    const command = (method === 'add') ? 'addValue' : 'setValue';

    browser[command](element, text);

    done();
};
