/**
 * check position
 */

module.exports = function(elem) {

    var done = arguments[arguments.length-1],
        x    = null,
        y    = null,
        falseCaseX,falseCaseY;

    if(arguments.length === 6) {
        falseCaseX = arguments[1] === ' nicht';
        falseCaseY = arguments[3] === ' nicht';
        x = parseInt(arguments[2],10);
        y = parseInt(arguments[4],10);
    } else if(arguments[1] === 'x') {
        falseCaseX = arguments[2] === ' nicht';
        x = parseInt(arguments[3],10);
    } else {
        falseCaseY = arguments[2] === ' nicht';
        y = parseInt(arguments[3],10);
    }

    this.browser.getLocation(elem, function(err,res) {
        should.not.exist(err);

        if(x) {
            if(falseCaseX) {
                res.x.should.not.equal(x, 'element ' + elem + ' should not be positioned at ' + x + 'px on the x axis');
            } else {
                res.x.should.equal(x, 'element ' + elem + ' should be positioned at ' + x + 'px on the x axis, but was found at ' + res.x + 'px');
            }
        }

        if(y) {
            if(falseCaseY) {
                res.y.should.not.equal(y, 'element ' + elem + ' should not be positioned at ' + y + 'px on the y axis');
            } else {
                res.y.should.equal(y, 'element ' + elem + ' should be positioned at ' + y + 'px on the y axis, but was found at ' + res.y + 'px');
            }
        }

    }).call(done);
};
