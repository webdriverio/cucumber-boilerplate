module.exports = function (action, type, element, done) {
    var elem = (type === 'link') ? '=' + element : element,
        method = (action === 'click') ? 'click' : 'doubleClick';

    this.browser[method](elem)
        .call(done);
};
