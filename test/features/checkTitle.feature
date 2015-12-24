Feature: Local server test
    As a developer
    I want the demo app have the correct title

    Background:
        Given I open the site "/"

    Scenario: Is not Google
        Then I expect that the title is not "Google"

    Scenario: Is correct
        Then I expect that the title is "DEMO APP"
