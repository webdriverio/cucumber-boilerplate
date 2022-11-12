import { Given } from '@cucumber/cucumber';

import checkContainsAnyText from '../support/check/checkContainsAnyText.js';
import checkIsEmpty from '../support/check/checkIsEmpty.js';
import checkContainsText from '../support/check/checkContainsText.js';
import checkCookieContent from '../support/check/checkCookieContent.js';
import checkCookieExists from '../support/check/checkCookieExists.js';
import checkDimension from '../support/check/checkDimension.js';
import checkElementExists from '../support/check/checkElementExists.js';
import checkEqualsText from '../support/check/checkEqualsText.js';
import checkModal from '../support/check/checkModal.js';
import checkOffset from '../support/check/checkOffset.js';
import checkProperty from '../support/check/checkProperty.js';
import checkSelected from '../support/check/checkSelected.js';
import checkTitle from '../support/check/checkTitle.js';
import checkUrl from '../support/check/checkURL.js';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab.js';
import compareText from '../support/check/compareText.js';
import isEnabled from '../support/check/isEnabled.js';
import isDisplayed from '../support/check/isDisplayed.js';
import openWebsite from '../support/action/openWebsite.js';
import setWindowSize from '../support/action/setWindowSize.js';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the element "([^"]*)?" is( not)* displayed$/,
    isDisplayed
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
);

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
);

Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    setWindowSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab as never
);

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);
