Feature: Test the selected state of a checkbox
    As a developer
    I want to be able to test the selected state of a checkbox

    Background:
        Given I open the site "/"

    Scenario: The checkbox should not be selected by default
        Then  I expect that checkbox "#checkbox" is not checked

    Scenario: The checkbox should be checked when clicked
        Given the checkbox "#checkbox" is not checked
        When  I click on the element "#checkbox"
        Then  I expect that checkbox "#checkbox" is checked

    Scenario: The checkbox should deselect when clicked twice
        Given the checkbox "#checkbox" is not checked
        When  I click on the element "#checkbox"
        And   I click on the element "#checkbox"
        Then  I expect that checkbox "#checkbox" is not checked
