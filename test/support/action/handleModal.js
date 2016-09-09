module.exports = (action, modalType, done) => {
    let command = `alert${action.slice(0, 1).toUpperCase()}${action.slice(1)}`;

    /**
     * Alert boxes can't be dismissed, this causes Chrome to crash during tests
     */
    if (modalType === 'alertbox') {
        command = 'alertAccept';
    }

    browser[command]();

    done();
};
