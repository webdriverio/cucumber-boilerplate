Feature: Test button press
    As a developer
    I want to be able to test if a certain action is performed when a certain
    button is pressed

    Background:
        Given I open the site "/"

    Scenario: Test if element responds to button press
        Given the element "#testKeyResponse" not contains any text
        When  I press "a"
        Then  I expect that element "#testKeyResponse" contains the text "65"

    Scenario: Test if element responds to button press
        Given the element "#testKeyResponse" not contains any text
        When  I press "b"
        Then  I expect that element "#testKeyResponse" not contains the text "65"

    # Escape key
    Scenario: Test if element responds to button press
        Given the element "#testKeyResponse" not contains any text
        When  I press "Escape"
        Then  I expect that element "#testKeyResponse" contains the text "27"
