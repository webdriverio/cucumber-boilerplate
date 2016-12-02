Feature: Test if new windows/tabs are being opened
    As a developer
    I want to be able to test if a element opens a new window/tab

    Background:
        Given I have closed all but the first tab
        And   I open the site "/"

    Scenario: Test if a new window/tab is not being opened
        Given the page url is "http://localhost:8080/"
        Then  I expect a new window has not been opened

    Scenario: Test if a default link does not open a new window/tab
        When  I click on the element "#linkSameWindow"
        Then  I expect a new window has not been opened

    Scenario: Test if a link with target="_blank" does open a new window/tab
        When  I click on the element "#linkNewWindow"
        Then  I expect a new window has been opened

    Scenario: Test if a window/tab from "google.com" has the correct url
        When  I click on the element "#linkNewWindow"
        Then  I expect the url "http://example.com/" is opened in a new window

    Scenario: Test all opened windows/tabs are now closed
        Given the page url is "http://localhost:8080/"
        Then  I expect a new window has not been opened

    Scenario: Test if we can close the last opened window/tab
        When  I click on the element "#linkNewWindow"
        Then  I expect a new window has been opened
        When  I close the last opened window
        Then  I expect a new window has not been opened

    Scenario: Test if we can focus the last opened window/tab
        When  I click on the element "#linkNewWindow"
        Then  I expect a new window has been opened
        When  I focus the last opened window
        Then  I expect that the url is "http://example.com/"
        When  I close the last opened window
        Then  I expect that the url is "http://localhost:8080/"
