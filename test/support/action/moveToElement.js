module.exports = function (element, obsolete, x, y) {
    var done = arguments[arguments.length - 1];

    x = parseInt(x, 10) || 0;
    y = parseInt(y, 10) || 0;
    this.browser
        .moveToObject(element, x, y)
        .call(done);
};
