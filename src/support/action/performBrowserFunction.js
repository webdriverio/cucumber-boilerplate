/** * Perform a browser function
 * @param  {String}   browserFunction      The action to perform (refresh / go back / go forward / close the browser
                                           (closing the browser is usually done by selenium but in some cases (such
                                           as closing pages with an active form) selenium is unable to close the window
                                           due to a popup. This step is then added to the end of a scenario to ensure
                                           the browser is closed))
 * @param  {Function} done                 Function to execute when finished
*/

module.exports = (browserFunction, done) => {

   if (browserFunction === 'refresh the page') {
       browser.refresh();
   } else if (browserFunction === 'go back') {
       browser.back();
   }  else if (browserFunction === 'go forward') {
       browser.forward();
   }  else if (browserFunction === 'close the browser') {
       browser.close();
   }

   done();
};