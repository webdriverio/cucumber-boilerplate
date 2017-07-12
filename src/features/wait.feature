Feature: Test waiting for actions
    As a developer
    I want to be able to test if delayed actions are being performed

    Background:
        Given I open the url "http://localhost:8080/"
        And   I pause for 1000ms

    Scenario: Test if element becomes checked after 2000 ms
        Given the checkbox "#waitForCheckedElement" is not checked
        When  I click on the button "#waitForCheckedBtn"
        Then  I wait on element "#waitForCheckedElement" for 2000ms to be checked

    Scenario: Test if element becomes checked
        Given the checkbox "#waitForCheckedElement" is not checked
        When  I click on the button "#waitForCheckedBtn"
        Then  I wait on element "#waitForCheckedElement" for 1000ms to be checked

    Scenario: Test if element becomes enabled
        Given the element "#waitForEnabledElement" is not enabled
        When  I click on the button "#waitForEnabledBtn"
        Then  I wait on element "#waitForEnabledElement" for 1000ms to be enabled

    Scenario: Test if element becomes selected
        Given the element "#waitForSelectedElement option:nth-child(2)" is not selected
        When  I click on the button "#waitForSelectedBtn"
        Then  I wait on element "#waitForSelectedElement option:nth-child(2)" for 1000ms to be selected

    Scenario: Test if element becomes visible
        Given the element "#waitForVisibleElement" is not visible
        When  I click on the button "#waitForVisibleBtn"
        Then  I wait on element "#waitForVisibleElement" for 1000ms to be visible

    Scenario: Test if element to contain a text
        Given the element "#waitForContainsTextElement" not contains any text
        When  I click on the button "#waitForContainsTextBtn"
        Then  I wait on element "#waitForContainsTextElement" for 1000ms to contain a text

    Scenario: Test if element to contain a value
        Given the element "#waitForContainsValueElement" not contains any text
        When  I click on the button "#waitForContainsValueBtn"
        Then  I wait on element "#waitForContainsValueElement" for 1000ms to contain a value

    Scenario: Test if element to exist
        Given there is no element "#waitForCreateElement > span" on the page
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms

    Scenario: Test if element exists
        Given there is no element "#waitForCreateElement > span" on the page
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms to exist

    Scenario: Test if element becomes unchecked
        When  I click on the button "#waitForCheckedBtn"
        And   I pause for 1000ms
        Then  I expect that checkbox "#waitForCheckedElement" is checked
        When  I click on the button "#waitForCheckedBtn"
        Then  I wait on element "#waitForCheckedElement" for 1000ms to not be checked

    Scenario: Test if element becomes disabled
        When  I click on the button "#waitForEnabledBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForEnabledElement" is enabled
        When  I click on the button "#waitForEnabledBtn"
        Then  I wait on element "#waitForEnabledElement" for 1000ms to not be enabled

    Scenario: Test if element becomes not selected
        When  I click on the button "#waitForSelectedBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForSelectedElement option:nth-child(2)" is selected
        When  I click on the button "#waitForSelectedBtn"
        Then  I wait on element "#waitForSelectedElement option:nth-child(2)" for 1000ms to not be selected

    Scenario: Test if element becomes not visible
        When  I click on the button "#waitForVisibleBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForVisibleElement" is visible
        When  I click on the button "#waitForVisibleBtn"
        Then  I wait on element "#waitForVisibleElement" for 1000ms to not be visible

    Scenario: Test if element to not contain a text
        When  I click on the button "#waitForContainsTextBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForContainsTextElement" contains any text
        When  I click on the button "#waitForContainsTextBtn"
        Then  I wait on element "#waitForContainsTextElement" for 1000ms to not contain a text

    Scenario: Test if element to not contain a value
        When  I click on the button "#waitForContainsValueBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForContainsValueElement" contains any text
        When  I click on the button "#waitForContainsValueBtn"
        Then  I wait on element "#waitForContainsValueElement" for 2000ms to not contain a value

    Scenario: Test if element not exists
        When  I click on the button "#waitForCreateBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForCreateElement > span" does exist
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms to not exist
