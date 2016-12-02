Feature: Viewport test
    As a Developer in Test
    I want to visit the Google result page for the term "test"
    And make sure I have the logo within the viewport and make sure the footer is not

    Scenario: Header in viewport, footer outside viewport
        Given I open the url "/"
        And   I have a screen that is 1024 by 768 pixels
        And   I pause for 1000ms
        Then  I expect that element "h1" is within the viewport
        And   I expect that element "footer" is not within the viewport
