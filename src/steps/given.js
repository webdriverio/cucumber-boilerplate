import { defineSupportCode } from 'cucumber';

import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkIsEmpty from '../support/check/checkIsEmpty';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isVisible from '../support/check/isVisible';
import openWebsite from '../support/action/openWebsite';
import resizeScreenSize from '../support/action/resizeScreenSize';


defineSupportCode(({ Given }) => {
    Given(
        /^I open the (url|site) "([^"]*)?"$/,
        openWebsite
    );

    Given(
        /^the element "([^"]*)?" is( not)* visible$/,
        isVisible
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
        /^the element "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
        checkEqualsText
    );

    Given(
        /^the element "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        checkContainsText
    );

    Given(
        /^the element "([^"]*)?"( not)* contains any text$/,
        checkContainsAnyText
    );

    Given(
        /^the element "([^"]*)?" is( not)* empty$/,
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
        resizeScreenSize
    );

    Given(
        /^I have closed all but the first (window|tab)$/,
        closeAllButFirstTab
    );

    Given(
        /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );
});
