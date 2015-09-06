Feature: Github test
    As a Developer in Test
    I want to search for webdriverio repository
    So that I can use it in my future tests

Scenario: open URL
    Given I open the url "https://github.com/"
    Then  I expect that the url is "https://github.com/"
    And   I expect that the title is "GitHub · Where software is built"

Scenario: search for webdriverio repository
    Given I open the url "https://github.com/search"
    # And   there is an element ".input-block" on the page
    And   the inputfield ".input-block" does contain the text ""
    And   I set "webdriverio" to the inputfield ".input-block"
    When  I submit the form "#search_form"
    Then  I expect that element ".repo-list-item:first-child > .repo-list-description" contains the text "Webdriver/Selenium 2.0 JavaScript bindings for Node.js"
