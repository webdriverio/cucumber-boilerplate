Feature: Test the page structure
    As a developer
    I want to be able to test if a page has a certain structure

    Background:
        Given I open the site "/"

    Scenario: Test if the page has a H1 I expect its at the top of the page
        Given  there is an element "h1" on the page
        When   I scroll to element "h1"
        Then   I expect that element "h1" is displayed

    Scenario: Test if the page has only one H1 element
        Given  there is no element "h1:nth-child(n+2)" on the page
