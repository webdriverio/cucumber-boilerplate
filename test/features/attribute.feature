Feature: Test the attributes of a given element
    As a developer
    I want to be able to test the attributes of a given element

    Background:
        Given I open the site "/"

    Scenario: The attribute "role" of a element should be "note"
        Then  I expect that the attribute "role" from element "#attributeComparison" is "note"

    Scenario: The attribute "role" of a element should not be "main"
        Then  I expect that the attribute "role" from element "#attributeComparison" is not "main"

    Scenario: The CSS attribute "color" of a element should be "red"
        Then  I expect that the css attribute "color" from element "#cssAttributeComparison" is "rgba(255,0,0,1)"

    Scenario: The CSS attribute "color" of a element should not be "blue"
        Then  I expect that the css attribute "color" from element "#cssAttributeComparison" is not " rgba(0,255,0,1)"

    Scenario: The (missing) CSS attribute "border" of a element should not be "0"
        Then  I expect that the css attribute "border" from element "#cssAttributeComparison" is not "0"
