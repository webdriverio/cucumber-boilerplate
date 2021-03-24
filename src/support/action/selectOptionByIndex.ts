import { Selector } from 'webdriverio';

/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export default (
    index: string,
    obsolete: never,
    selector: Selector
) => {
    /**
     * The index of the option to select
     * @type {Int}
     */
    const optionIndex = parseInt(index, 10);

    $(selector).selectByIndex(optionIndex);
};
