import { Selector } from 'webdriverio';

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default (selector: Selector) => {
    $(selector).scrollIntoView();
};
