import { Then } from '@cucumber/cucumber';

import checkClass from '../support/check/checkClass.js';
import checkContainsAnyText from '../support/check/checkContainsAnyText.js';
import checkIsEmpty from '../support/check/checkIsEmpty.js';
import checkContainsText from '../support/check/checkContainsText.js';
import checkCookieContent from '../support/check/checkCookieContent.js';
import checkCookieExists from '../support/check/checkCookieExists.js';
import checkDimension from '../support/check/checkDimension.js';
import checkEqualsText from '../support/check/checkEqualsText.js';
import checkFocus from '../support/check/checkFocus.js';
import checkInURLPath from '../support/check/checkInURLPath.js';
import checkIsOpenedInNewWindow from
    '../support/check/checkIsOpenedInNewWindow.js';
import checkModal from '../support/check/checkModal.js';
import checkModalText from '../support/check/checkModalText.js';
import checkNewWindow from '../support/check/checkNewWindow.js';
import checkOffset from '../support/check/checkOffset.js';
import checkProperty from '../support/check/checkProperty.js';
import checkFontProperty from '../support/check/checkFontProperty.js';
import checkSelected from '../support/check/checkSelected.js';
import checkTitle from '../support/check/checkTitle.js';
import checkTitleContains from '../support/check/checkTitleContains.js';
import checkURL from '../support/check/checkURL.js';
import checkURLPath from '../support/check/checkURLPath.js';
import checkWithinViewport from '../support/check/checkWithinViewport.js';
import compareText from '../support/check/compareText.js';
import isEnabled from '../support/check/isEnabled.js';
import isExisting from '../support/check/isExisting.js';
import isVisible from '../support/check/isDisplayed.js';
import waitFor from '../support/action/waitFor.js';
import waitForVisible from '../support/action/waitForDisplayed.js';
import checkIfElementExists from '../support/lib/checkIfElementExists.js';

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Then(
    /^I expect that the title( not)* contains "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* displayed$/,
    isVisible
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
    waitForVisible
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow as never
);

Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow as never
);

Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be displayed|contain a text|contain a value|exist))*$/,
    {
        wrapperOptions: {
            retry: 3,
        },
    },
    waitFor
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);
