@Pending
Feature: Test modals
    As a developer
    I want to be able to test the onening, closing and contens of modal windows

    Background:
        Given I open the site "/"

    Scenario: Test if alert is opened accepted
        Given a alertbox is not opened
        When  I click on the element "#openAlert"
        Then  I expect that a alertbox is opened
        And   I expect that a alertbox contains the text "I am a alert box!"
        When  I accept the alertbox
        Then  I expect that a alertbox is not opened

    Scenario: Test if alert is opened & dismissed
        Given a alertbox is not opened
        When  I click on the element "#openAlert"
        Then  I expect that a alertbox is opened
        When  I dismiss the alertbox
        Then  I expect that a alertbox is not opened

    Scenario: Test if confirm is canceled
        Given a confirmbox is not opened
        And   the element "#confirmResult" not contains any text
        When  I click on the element "#openConfirm"
        Then  I expect that a confirmbox is opened
        And   I expect that a alertbox contains the text "I am a confirm box!"
        When  I dismiss the confirmbox
        Then  I expect that a confirmbox is not opened
        And   I expect that element "#confirmResult" contains the text "false"

    Scenario: Test if confirm is accepted
        Given a confirmbox is not opened
        And   the element "#confirmResult" not contains any text
        When  I click on the element "#openConfirm"
        Then  I expect that a confirmbox is opened
        When  I accept the confirmbox
        Then  I expect that a confirmbox is not opened
        And   I expect that element "#confirmResult" contains the text "true"

    Scenario: Test if prompt is opened & dismissed
        Given a prompt is not opened
        And   the element "#promptResult" not contains any text
        When  I click on the element "#openPrompt"
        Then  I expect that a prompt is opened
        And   I expect that a alertbox contains the text "I am a prompt!"
        When  I dismiss the prompt
        Then  I expect that a prompt is not opened
        And   I expect that element "#promptResult" contains the text "null"

    Scenario: Test if prompt is accepted
        Given a prompt is not opened
        And   the element "#promptResult" not contains any text
        When  I click on the element "#openPrompt"
        Then  I expect that a prompt is opened
        When  I accept the prompt
        Then  I expect that a prompt is not opened
        And   I expect that element "#promptResult" not contains any text

    Scenario: Test if prompt has text entered
        Given a prompt is not opened
        And   the element "#promptResult" not contains any text
        When  I click on the element "#openPrompt"
        Then  I expect that a prompt is opened
        When  I enter "test 1 2 3" into the prompt
        And   I accept the prompt
        Then  I expect that a prompt is not opened
        And   I expect that element "#promptResult" contains the text "test 1 2 3"
