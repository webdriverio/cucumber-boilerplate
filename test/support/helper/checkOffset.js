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
                res.x.should.not.equal(x, 'Element ' + elem + ' sollte nicht mit ' + x + 'px auf der x Achse liegen');
            } else {
                res.x.should.equal(x, 'Element ' + elem + ' sollte mit ' + x + 'px auf der x Achse liegen, ist jedoch bei ' + res.x);
            }
        }

        if(y) {
            if(falseCaseY) {
                res.y.should.not.equal(y, 'Element ' + elem + ' sollte nicht mit ' + y + 'px auf der y Achse liegen');
            } else {
                res.y.should.equal(y, 'Element ' + elem + ' sollte mit ' + y + 'px auf der y Achse liegen, ist jedoch bei ' + res.y);
            }
        }

    }).call(done);
};
