import { Selector } from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default (
    action: 'click' | 'doubleClick',
    type: 'link' | 'selector',
    selector: Selector
) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = (type === 'link') ? `=${selector}` : selector;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    checkIfElementExists(selector2);

    $(selector2)[method]();
};
