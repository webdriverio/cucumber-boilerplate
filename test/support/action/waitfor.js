module.exports = function (elem, obsolete, ms, isWaitingOnSpecificState, falseState, state) {
    var command = 'waitForExist',
        done = arguments[arguments.length - 1];

    if (isWaitingOnSpecificState) {
        state = state.indexOf(' ') > -1 ? state.split(/\s/)[state.split(/\s/).length - 1] : state;

        // Cehckbox checked state translates to selected state
        if (state === 'checked') {
            state = 'selected';
        }

        command = 'waitFor' + state[0].toUpperCase() + state.slice(1);
    }

    falseState = (falseState) ? true : false;

    ms = parseInt(ms, 10) || 3000;
    this.browser[command](elem, ms, falseState)
        .call(done);
};
