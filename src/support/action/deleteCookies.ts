/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
export default async (name?: string | string[]) => {
    await browser.deleteCookies(name);
};
