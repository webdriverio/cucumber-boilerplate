Feature: Test waiting for actions
    As a developer
    I want to be able to test if delayed actions are being performed

    Background:
        Given I open the url "http://localhost:8080/"
        And   I pause for 1000ms


    Scenario: Test if element becomes enabled
        Given the element "#waitForEnabledElement" is not enabled
        When  I click on the button "#waitForEnabledBtn"
        Then  I wait on element "#waitForEnabledElement" for 1000ms to be enabled

    Scenario: Test if element becomes displayed
        Given the element "#waitForVisibleElement" is not displayed
        When  I click on the button "#waitForVisibleBtn"
        Then  I wait on element "#waitForVisibleElement" for 1000ms to be displayed

    Scenario: Test if element to exist
        Given there is no element "#waitForCreateElement > span" on the page
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms

    Scenario: Test if element exists
        Given there is no element "#waitForCreateElement > span" on the page
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms to exist

    Scenario: Test if element becomes disabled
        When  I click on the button "#waitForEnabledBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForEnabledElement" is enabled
        When  I click on the button "#waitForEnabledBtn"
        Then  I wait on element "#waitForEnabledElement" for 1000ms to not be enabled

    Scenario: Test if element becomes not displayed
        When  I click on the button "#waitForVisibleBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForVisibleElement" is displayed
        When  I click on the button "#waitForVisibleBtn"
        Then  I wait on element "#waitForVisibleElement" for 1000ms to not be displayed

    Scenario: Test if element not exists
        When  I click on the button "#waitForCreateBtn"
        And   I pause for 1000ms
        Then  I expect that element "#waitForCreateElement > span" does exist
        When  I click on the button "#waitForCreateBtn"
        Then  I wait on element "#waitForCreateElement > span" for 1000ms to not exist
