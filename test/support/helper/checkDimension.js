/**
 * check width and height
 */

module.exports = function(elem) {

    var done   = arguments[arguments.length-1],
        width  = null,
        height = null,
        falseCaseWidth,falseCaseHeight;

    if(arguments.length === 6) {
        falseCaseWidth  = arguments[1] === 'nicht die';
        falseCaseHeight = arguments[3] === 'nicht die';
        width  = parseInt(arguments[2],10);
        height = parseInt(arguments[4],10);
    } else if(arguments[2] === 'Breite') {
        falseCaseWidth  = arguments[1] === 'nicht die';
        width = parseInt(arguments[3],10);
    } else {
        falseCaseHeight = arguments[1] === 'nicht die';
        height = parseInt(arguments[3],10);
    }

    this.browser.getElementSize(elem, function(err,res) {
        should.not.exist(err);

        if(width) {
            if(falseCaseWidth) {
                res.width.should.not.equal(width, 'element ' + elem + ' should not have a width of ' + width + 'px');
            } else {
                res.width.should.equal(width, 'Element ' + elem + ' should have a width of ' + width + 'px, but is ' + res.width + 'px');
            }
        }

        if(height) {
            if(falseCaseHeight) {
                res.height.should.not.equal(height, 'Element ' + elem + ' should not have a height of ' + height + 'px');
            } else {
                res.height.should.equal(height, 'Element ' + elem + ' should have a height of ' + height + 'px, but is ' + res.height + 'px');
            }
        }

    }).call(done);

};
