module.exports =
(elem, obsolete, ms, isWaitingOnSpecificState, falseState, state, done) => {
    const intMs = parseInt(ms, 10) || 3000;

    let command = 'waitForExist';
    let boolFalseState = falseState;
    let parsedState;

    if (isWaitingOnSpecificState) {
        parsedState = state.indexOf(' ') > -1
                    ? state.split(/\s/)[state.split(/\s/).length - 1]
                    : state;

        // Check box checked state translates to selected state
        if (parsedState === 'checked') {
            parsedState = 'selected';
        }

        command = `waitFor${parsedState[0].toUpperCase()}` +
                    `${parsedState.slice(1)}`;
    }

    if (typeof falseState === 'undefined') {
        boolFalseState = false;
    }

    browser[command](elem, intMs, boolFalseState);

    done();
};
