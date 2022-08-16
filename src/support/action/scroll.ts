import type { Selector } from 'webdriverio';

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default async (selector: Selector) => {
    await $(selector).scrollIntoView();
};
