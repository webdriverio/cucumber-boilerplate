import clearInputField from '../support/action/clearInputField';
import clickElement from '../support/action/clickElement';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import deleteCookie from '../support/action/deleteCookie';
import dragElement from '../support/action/dragElement';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import handleModal from '../support/action/handleModal';
import moveToElement from '../support/action/moveToElement';
import pause from '../support/action/pause';
import pressButton from '../support/action/pressButton';
import scroll from '../support/action/scroll';
import selectOption from '../support/action/selectOption';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import setCookie from '../support/action/setCookie';
import setInputField from '../support/action/setInputField';
import setPromptText from '../support/action/setPromptText';
import submitForm from '../support/action/submitForm';

module.exports = function when() {
    this.When(
        /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
        clickElement
    );

    this.When(
        /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        setInputField
    );

    this.When(
        /^I clear the inputfield "([^"]*)?"$/,
        clearInputField
    );

    this.When(
        /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
        dragElement
    );

    this.When(
        /^I submit the form "([^"]*)?"$/,
        submitForm
    );

    this.When(
        /^I pause for (\d+)ms$/,
        pause
    );

    this.When(
        /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
        setCookie
    );

    this.When(
        /^I delete the cookie "([^"]*)?"$/,
        deleteCookie
    );

    this.When(
        /^I press "([^"]*)?"$/,
        pressButton
    );

    this.When(
        /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
        handleModal
    );

    this.When(
        /^I enter "([^"]*)?" into the prompt$/,
        setPromptText
    );

    this.When(
        /^I scroll to element "([^"]*)?"$/,
        scroll
    );

    this.When(
        /^I close the last opened (window|tab)$/,
        closeLastOpenedWindow
    );

    this.When(
        /^I focus the last opened (window|tab)$/,
        focusLastOpenedWindow
    );

    this.When(
        /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
        selectOptionByIndex
    );

    this.When(
        /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        selectOption
    );

    this.When(
        /^I move to element "([^"]*)?"( with an offset of (\d+),(\d+))*$/,
        moveToElement
    );
};
