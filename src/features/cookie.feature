Feature: Test the existens and content of cookies
    As a developer
    I want to be able to test the existence and/or the content of cookies

    Background:
        Given I open the site "/"
        And   I pause for 500ms

    Scenario: The cookie "test" should exist
        Then  I expect that cookie "test" exists

    Scenario: The cookie "test2" should not exist
        Given the cookie "test" contains the value "yumyum"
        Then  I expect that cookie "test2" not exists

    Scenario: The cookie "test" should contain the value "yumyum"
        Given the cookie "test" contains not the value "out of date"
        Then  I expect that cookie "test" contains "yumyum"

    Scenario: The cookie "test" should not contain the value "out of date"
        Then  I expect that cookie "test" not contains "out of date"

    #
    # Currently this test is failing in PhantomJS due to an Ghostdriver issue
    # https://github.com/detro/ghostdriver/issues/365
    #
    @Pending
    Scenario: The cookie "test3" should be created
        When  I set a cookie "test3" with the content "more cookies"
        Then  I expect that cookie "test3" exists
        And   I expect that cookie "test3" contains "more cookies"

    @Pending
    Scenario: The cookie "test3" should be deletable
        Then  I expect that cookie "test3" exists
        When  I delete the cookie "test3"
        Then  I expect that cookie "test3" not exists
