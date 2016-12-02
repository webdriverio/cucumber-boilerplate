Feature: Test form submission
    As a developer
    I want to be able to test form submission

    Background:
        Given I open the site "/"

    Scenario: Test if a message is shown when the form is submitted
        Given the element "#formSubmitTest .message" is not visible
        When  I submit the form "#formSubmitTest"
        Then  I expect that element "#formSubmitTest .message" is visible
