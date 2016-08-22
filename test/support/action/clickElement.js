module.exports = (action, type, element, done) => {
    var elem = (type === 'link') ? '=' + element : element,
        method = (action === 'click') ? 'click' : 'doubleClick';

    browser[method](elem);

    done();
};
