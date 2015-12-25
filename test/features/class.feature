# I expect that element "$string" (has|does not have) the class "$string"

Feature: Test if a given element has a certain CSS class
    As a developer
    I want to be able to test if a element has a certain CSS class

    Background:
        Given I open the site "/"

    Scenario: Element #classTest should have the class "class1"
        Then  I expect that element "#classTest" has the class "class1"

    Scenario: Element #classTest should also have the class "class2"
        Then  I expect that element "#classTest" has the class "class2"

    Scenario: Element #classTest should not have the class "class3"
        Then  I expect that element "#classTest" does not have the class "class3"
