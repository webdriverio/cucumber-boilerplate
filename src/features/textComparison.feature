Feature: Test text contents of elements
    As a developer
    I want to be able to test the text inside a element against the text inside
    another element

    Background:
        Given I open the site "/"

    Scenario: Elements containing different text
        Then  I expect that element "#textComparison1" not contains the same text as element "#textComparison2"

    Scenario: Elements containing the same text
        Then  I expect that element "#textComparison1" contains the same text as element "#textComparison3"

    Scenario: Elements containing no text
        Then  I expect that element "#textComparison4" contains the same text as element "#textComparison5"

    Scenario: Elements containing text and elements
        Then  I expect that element "#textComparison1" contains the same text as element "#textComparison6"

    Scenario: Elements containing text inside a child element
        Then  I expect that element "#textComparison1" contains the same text as element "#textComparison7"

    Scenario: Elements containing text with encoded strings
        Then  I expect that element "#textComparison8" contains the same text as element "#textComparison9"

    Scenario: Element containing different text
        Then I expect that element "#textDoesNotContainCucumber" not contains the text "This element contains cucumber"

    Scenario: Element containing the same text
        Then I expect that element "#textDoesContainCucumber" contains the text "This element contains cucumber"

    Scenario: Input containing different text
        Then I expect that element "#valueDoesNotContainCucumber" not contains the text "This input contains cucumber"

    Scenario: Input containing the same text
        Then I expect that element "#valueDoesContainCucumber" contains the text "This input contains cucumber"

    # Button checks
    Scenario: Button contains text
        Then I expect that button "button[id='waitForCheckedBtn']" contains the text "Check"

    Scenario: Button not contains the text
        Then I expect that button "button[id='waitForCheckedBtn']" not contains the text "Not checked"

     Scenario: Element containing different text
        Then I expect that element "button[id='waitForCheckedBtn']" not contains the text "This element contains cucumber"

    Scenario: Button contains any text
        Then I expect that button "button[id='waitForCheckedBtn']" contains any text

    Scenario: Button is not empty
        Then I expect that button "button[id='waitForCheckedBtn']" is not empty
