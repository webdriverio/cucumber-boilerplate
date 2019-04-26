Feature: Test moveTo elements
    As a developer
    I want to be able to test if I can move to a element
    with an optional relative X and Y position

    Background:
        Given I open the site "/"
        And   I have a screen that is 1024 by 768 pixels
        When  I scroll to element "#moveTo"

    # Scenario: Move to just the element
    #     When  I move to element "#moveTo"
    #     Then  I expect that element "#moveTo" has the class "moveToClass"
    #
    #     When  I move to element "body"
    #     Then  I expect that element "#moveTo" does not have the class "moveToClass"

    # Scenario: Move to the element with a X and Y offset
    #     When  I move to element "#moveTo" with an offset of 15,5
    #     Then  I expect that element "#moveTo" has the class "moveToClass"

    # Scenario: Move to the element with a too large offset
    #     When  I move to element "#moveTo" with an offset of 5000,5000
    #     Then  I expect that element "#moveTo" does not have the class "moveToClass"
