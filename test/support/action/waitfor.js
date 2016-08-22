module.exports = (elem, obsolete, ms, isWaitingOnSpecificState, falseState, state) => {
    var command = 'waitForExist',
        done = arguments[arguments.length - 1];

    if (isWaitingOnSpecificState) {
        state = state.indexOf(' ') > -1 ? state.split(/\s/)[state.split(/\s/).length - 1] : state;

        // Check box checked state translates to selected state
        if (state === 'checked') {
            state = 'selected';
        }

        command = 'waitFor' + state[0].toUpperCase() + state.slice(1);
    }

    if (typeof falseState === 'undefined') {
        falseState = false;
    }

    ms = parseInt(ms, 10) || 3000;
    browser[command](elem, ms, falseState);

    // @TODO is this required?
    if (typeof done === 'function') {
        done();
    }
};
