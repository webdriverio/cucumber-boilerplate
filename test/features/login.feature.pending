Feature: Github test
    As a Developer in Test
    I want to test if the github.com failed login screen displays a error

    Scenario: open URL
        Given I open the url "https://github.com/"
        Then  I expect that the url is "https://github.com/"
        And   I expect that the title is "How people build software · GitHub"

    Scenario: login with fake credentials
        Given I open the url "https://github.com/"
        When  I log in to site with username "marketionist" and password "1234"
        Then  I expect that element "#js-flash-container .flash-error" is visible
