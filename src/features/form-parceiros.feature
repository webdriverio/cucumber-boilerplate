Feature: Submitting "Ouvidoria" form
	As an user
	In order to contact the BrasilPrev Team
	I want to be able to submit this forms

	Background:
		Given I open the url "http://localhost:8000/parceiros"

    Scenario: Test form successfully
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
        And   I add "Sarah Connor" to the inputfield "#content [name='corretora']"
        And   I add "(83) 98886-4544" to the inputfield "#content [name='telefone']"
        And   I add "theend@skynet.me" to the inputfield "#content [name='email']"
        And   I click on the button "#content .button.medium"
        Then  I wait on element ".popup-message" to be visible
        And   I expect that element ".formBox .popup-message" contains the text "Mensagem enviada."

    Scenario: Test all empty fields
        When  I click on the button "#content .button.medium"
        Then  I expect that element "#content .nome .inputBox" has the class "invalid"
        And   I expect that element "#content .telefone .inputBox" has the class "invalid"
        And   I expect that element "#content .email .inputBox" has the class "invalid"
        And   I expect that element "#content .corretora .inputBox" has the class "invalid"

    Scenario: Test invalid phone number
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
        And   I add "Sarah Connor" to the inputfield "#content [name='corretora']"
        And   I add "theend@skynet.me" to the inputfield "#content [name='email']"
        And   I add "I'm an invalid data" to the inputfield "#content [name='telefone']"
        And   I click on the button "#content .button.medium"
        Then  I expect that element "#content .telefone .inputBox" has the class "invalid"

    Scenario: Test invalid email
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
        And   I add "Sarah Connor" to the inputfield "#content [name='corretora']"
        And   I add "1111" to the inputfield "#content [name='email']"
        And   I add "(83) 98886-4544" to the inputfield "#content [name='telefone']"
        And   I click on the button "#content .button.medium"
        Then  I expect that element "#content .telefone .inputBox" has the class "invalid"
