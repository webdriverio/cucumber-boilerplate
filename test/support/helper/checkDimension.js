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
                res.width.should.not.equal(width, 'Element ' + elem + ' sollte nicht ' + width + 'px breit sein');
            } else {
                res.width.should.equal(width, 'Element ' + elem + ' sollte ' + width + 'px breit sein, ist jedoch ' + res.width + ' breit');
            }
        }

        if(height) {
            if(falseCaseHeight) {
                res.height.should.not.equal(height, 'Element ' + elem + ' sollte nicht ' + height + 'px hoch sein');
            } else {
                res.height.should.equal(height, 'Element ' + elem + ' sollte ' + height + 'px hoch sein, ist jedoch ' + res.height + ' hoch');
            }
        }

    }).call(done);

};
