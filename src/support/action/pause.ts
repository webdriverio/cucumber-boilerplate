/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
export default async (ms: string) => {
    /**
     * Number of milliseconds
     * @type {Int}
     */
    const intMs = parseInt(ms, 10);

    await browser.pause(intMs);
};
