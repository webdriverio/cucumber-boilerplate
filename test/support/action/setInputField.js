module.exports = function (method, text, element, done) {
    var command = (method === 'add') ? 'addValue' : 'setValue';

    this.browser[command](element, text)
        .call(done);
};
