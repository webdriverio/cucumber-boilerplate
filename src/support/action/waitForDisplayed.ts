import type { Selector } from 'webdriverio';

/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether or not to expect a visible or hidden state
 *
 * @todo  merge with waitfor
 */
export default (selector: Selector, falseCase: any) => {
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = 10000;

    $(selector).waitForDisplayed({
        timeout: ms,
        reverse: Boolean(falseCase),
    });
};
