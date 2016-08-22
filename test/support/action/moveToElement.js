module.exports = (element, obsolete, x, y) => {
    var done = arguments[arguments.length - 1];

    x = parseInt(x, 10) || undefined;
    y = parseInt(y, 10) || undefined;

    browser.moveToObject(element, x, y);

    if (typeof done === 'function') {
        done();
    }
};
