module.exports = (action, type, element, done) => {
    const elem = (type === 'link') ? `=${element}` : element;
    const method = (action === 'click') ? 'click' : 'doubleClick';

    browser[method](elem);

    done();
};
