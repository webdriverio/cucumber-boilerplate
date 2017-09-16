Feature: Test select elements
    As a developer
    I want to be able to test if a certain value is selected for a certain
    select element

    Background:
        Given I open the site "/"

    Scenario: Test if we can select the second option of a select element
        Then I expect that element "#selectElementTest option:nth-child(2)" is not selected
        When I select the 1st option for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(2)" is selected

    Scenario: Test if we can select the third option of a select element
        Then I expect that element "#selectElementTest option:nth-child(3)" is not selected
        When I select the 2nd option for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(3)" is selected

    Scenario: Test if we can select the fourth option of a select element
        Then I expect that element "#selectElementTest option:nth-child(4)" is not selected
        When I select the 3th option for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(4)" is selected

    Scenario: Test if we can select the first option of a select element
        When I select the 1st option for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(1)" is not selected
        When I select the 0th option for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(1)" is selected

    Scenario: Test if we can select a option by its name
        Then I expect that element "#selectElementTest option:nth-child(2)" is not selected
        When I select the option with the name "secondOption" for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(2)" is selected

    Scenario: Test if we can select a option by its value
        Then I expect that element "#selectElementTest option:nth-child(3)" is not selected
        When I select the option with the value "third" for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(3)" is selected

    Scenario: Test if we can select a option by its visible text
        Then I expect that element "#selectElementTest option:nth-child(4)" is not selected
        When I select the option with the text "Option #4" for element "#selectElementTest"
        Then I expect that element "#selectElementTest option:nth-child(4)" is selected

    Scenario: Test if we can select a option by its value using XPath selectors only
        Then I expect that element "#selectElementTest option:nth-child(2)" is not selected
        When I select the option with the value "second" for element "//select[@id='selectElementTest']"
        Then I expect that element "#selectElementTest option:nth-child(2)" is selected

    Scenario: Test if we can select a option by its index using XPath selectors
        Then I expect that element "#selectElementTest option:nth-child(4)" is not selected
        When I select the 3rd option for element "//select[@id='selectElementTest']"
        Then I expect that element "#selectElementTest option:nth-child(4)" is selected

    Scenario: Test if we can select a option by its visible text using XPath selectors
        Then I expect that element "#selectElementTest option:nth-child(3)" is not selected
        When I select the option with the text "Option #3" for element "//select[@id='selectElementTest']"
        Then I expect that element "#selectElementTest option:nth-child(3)" is selected

    Scenario: Test if we can select a option by its name using XPath selectors
        Then I expect that element "#selectElementTest option:nth-child(2)" is not selected
        When I select the option with the name "secondOption" for element "//select[@id='selectElementTest']"
        Then I expect that element "#selectElementTest option:nth-child(2)" is selected

