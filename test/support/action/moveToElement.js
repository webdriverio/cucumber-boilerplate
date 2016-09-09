module.exports = (element, obsolete, x, y) => {
    const done = arguments[arguments.length - 1];

    const intX = parseInt(x, 10) || undefined;
    const intY = parseInt(y, 10) || undefined;

    browser.moveToObject(element, intX, intY);

    if (typeof done === 'function') {
        done();
    }
};
