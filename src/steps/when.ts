import { When } from '@cucumber/cucumber';

import clearInputField from '../support/action/clearInputField.js';
import clickElement from '../support/action/clickElement.js';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow.js';
import deleteCookies from '../support/action/deleteCookies.js';
import dragElement from '../support/action/dragElement.js';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow.js';
import handleModal from '../support/action/handleModal.js';
import moveTo from '../support/action/moveTo.js';
import pause from '../support/action/pause.js';
import pressButton from '../support/action/pressButton.js';
import scroll from '../support/action/scroll.js';
import selectOption from '../support/action/selectOption.js';
import selectOptionByIndex from '../support/action/selectOptionByIndex.js';
import setCookie from '../support/action/setCookie.js';
import setInputField from '../support/action/setInputField.js';
import setPromptText from '../support/action/setPromptText.js';
import switchIFrame from '../support/action/switchIFrame.js';

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);

When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
);

When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
);

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
);

When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookies
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
);

When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
);

When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
);

When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow as never
);

When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow as never
);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex as never
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveTo
);

When(
    /^I switch to the iframe "([^"]*)?"$/,
    switchIFrame
);
