Feature: Test the width and height of a given element
    As a developer
    I want to be able to test if a element has a certain width and/or height

    Background:
        Given I open the site "/"

    Scenario: The element #square100x100 whould have a width of 100px
        Then  I expect that element "#square100x100" is 100px broad

    Scenario: The element #square100x100 whould have a height of 100px
        Then  I expect that element "#square100x100" is 100px tall

    Scenario: The element #square100x100 whould not have a width of 101px
        Then  I expect that element "#square100x100" is not 101px broad

    Scenario: The element #square100x100 whould not have a height of 99px
        Then  I expect that element "#square100x100" is not 99px tall
