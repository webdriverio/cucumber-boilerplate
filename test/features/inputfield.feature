Feature: Test input fields on a page
    As a developer
    I want to be able to test input fields on a certain page

    Background:
        Given I open the site "/"
        Then  I expect that inputfield "#testInput" does not contain any text

    Scenario: Set the content of a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that inputfield "#testInput" does contain any text
        And   I expect that inputfield "#testInput" contains the text "test"

    Scenario: Add content to a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that inputfield "#testInput" does contain any text
        When  I add " more tests" to the inputfield "#testInput"
        Then  I expect that inputfield "#testInput" contains the text "test more tests"

    Scenario: Clear the content of a input field
        When  I set "test" to the inputfield "#testInput"
        Then  I expect that inputfield "#testInput" does contain any text
        And   I expect that inputfield "#testInput" contains the text "test"
        When  I clear the inputfield "#testInput"
        Then  I expect that inputfield "#testInput" does not contain any text
