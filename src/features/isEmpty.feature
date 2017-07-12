Feature: Test input fields on a page
    As a developer
    I want to be able to test input fields on a certain page

    Background:
        Given I open the site "/"
        Then  I expect that element "#testInput" is empty

    Scenario: Set the content of a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that element "#testInput" is not empty
        And   I expect that element "#testInput" contains the text "test"

    Scenario: Add content to a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that element "#testInput" is not empty
        When  I add " more tests" to the inputfield "#testInput"
        Then  I expect that element "#testInput" contains the text "test more tests"

    Scenario: Clear the content of a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that element "#testInput" is not empty
        And   I expect that element "#testInput" contains the text "test"
        When  I clear the inputfield "#testInput"
        Then  I expect that element "#testInput" is empty
