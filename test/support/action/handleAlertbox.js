module.exports = function(action, done) {
    var command = 'alert' + action.slice(0, 1).toUpperCase() + action.slice(1);
    this.browser[command]().call(done);
};
