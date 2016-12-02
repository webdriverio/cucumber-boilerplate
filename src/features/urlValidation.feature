Feature: Test if the url is a certain value
    As a developer
    I want to be able to test if the url is a certain value

    Scenario: The url should not be http://www.google.com/
        Given I open the site "/"
        Then  I expect that the url is not "http://www.google.com/"

    Scenario: The url should be http://127.0.0.1:8080/
        Given I open the site "/"
        Then  I expect that the url is "http://localhost:8080/"

    Scenario: The path should not be /index.html
        Given I open the site "/"
        Then  I expect that the path is not "/index.html"

    Scenario: The path should be /index.html
        Given I open the site "/index.html"
        Then  I expect that the path is "/index.html"

    Scenario: The url should not contain "google"
        Given I open the site "/"
        Then  I expect the url to not contain "google"

    Scenario: The url should not contain "index"
        Given I open the site "/index.html"
        Then  I expect the url to contain "index"
