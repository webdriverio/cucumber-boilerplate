Feature: Github test
    As a Developer in Test
    I want to search for webdriverio repository
    And check if some elements are existing and others are not

    Scenario: open URL
        Given I open the url "https://github.com/webdriverio/cucumber-boilerplate"
        Then  I expect that element ".octicon-mark-github" does exist
        And I expect that element ".some-other-element" does not exist
