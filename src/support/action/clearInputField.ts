import type { Selector } from 'webdriverio';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default async (selector: Selector) => {
    await $(selector).clearValue();
};
