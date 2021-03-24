/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (type: 'url' | 'site', page: string) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = (type === 'url') ? page : browser.options.baseUrl + page;
    browser.url(url);
};
