Feature: Test visibility of elements
    As a developer
    I want to be able to test the visibillity of a element

    Background:
        Given I open the url "http://localhost:8080/"
        And   I pause for 1000ms

    Scenario: Invisible elements to be not displayed
        Then  I expect that element "#hidden" is not displayed

    Scenario: Visible elements to be displayed
        Then  I expect that element "#visible" is displayed

    Scenario: Element should become displayed
        Given the element "#makeVisible" is not displayed
        When  I click on the element "#btnMakeVisible"
        Then  I expect that element "#makeVisible" becomes displayed

    Scenario: Element should become not displayed
        Given the element "#makeInvisible" is displayed
        When  I click on the element "#btnMakeInvisible"
        Then  I expect that element "#makeInvisible" becomes not displayed

    Scenario: Element in the viewport
        Then  I expect that element "h1" is within the viewport

    Scenario: Element outside the viewport
        When  I scroll to element "#footer"
        Then  I expect that element "h1" is not within the viewport
