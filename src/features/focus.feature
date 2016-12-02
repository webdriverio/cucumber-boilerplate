Feature: Test the focus state of a given element
    As a developer
    I want to be able to test if a element has a certain focus state

    Background:
        Given I open the site "/"

    Scenario: The element #textinput should not have the focus by default
        Then  I expect that element "#textinput" is not focused

    Scenario: The element #textinput should have the focus when selected
        When  I click on the element "#textinput"
        Then  I expect that element "#textinput" is focused
