Feature: Github test
    As a Developer in Test
    I want to test if the github.com failed login screen displays an error

    Scenario: login with fake credentials
        Given I open the url "https://github.com/login"
        And   I clear the inputfield "#login_field"
        When  I add "marketionist" to the inputfield "#login_field"
        And   I clear the inputfield "#password"
        And   I add "1111" to the inputfield "#password"
        And   I click on the button "[value='Sign in']"
        Then  I expect that element "#js-flash-container .flash-error" is displayed
