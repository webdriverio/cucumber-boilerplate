/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
module.exports = (ms) => {
    /**
     * Number of milliseconds
     * @type {Int}
     */
    const intMs = parseInt(ms, 10);

    browser.pause(intMs);
};
