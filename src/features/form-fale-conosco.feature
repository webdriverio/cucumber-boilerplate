Feature: Submitting "Fale Conosco" form
	As an user
	In order to contact the BrasilPrev Team
	I want to be able to submit this forms

	Background:
		Given I open the url "http://localhost:8000/fale-conosco"

	Scenario: Test form successfully
		When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "(83) 98886-4544" to the inputfield "#content [name='telefone']"
            And   I add "theend@skynet.me" to the inputfield "#content [name='email']"
            And   I add "No, no, no, no. You gotta listen to the way people talk. You don't say AFFIRMATIVE or some like that. You say NO PROBLEM. And if someone comes on to you with an attitude, you say EAT ME. And if you want to shine them on, it's HASTA LA VISTA, BABY" to the inputfield "#content [name='mensagem']"
            And   I click on the button "#content .button.medium"
	  	Then  I wait on element ".popup-message" to be visible
            And   I expect that element ".formBox .popup-message" contains the text "Mensagem enviada."

	Scenario: Test all empty fields
		When  I click on the button "#content .button.medium"
	  	Then  I expect that element "#content .nome .inputBox" has the class "invalid"
            And   I expect that element "#content .telefone .inputBox" has the class "invalid"
            And   I expect that element "#content .email .inputBox" has the class "invalid"
            And   I expect that element "#content .mensagem .textAreaBox" has the class "invalid"

	Scenario: Test invalid phone number
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "theend@skynet.me" to the inputfield "#content [name='email']"
            And   I add "No, no, no, no." to the inputfield "#content [name='mensagem']"
            And   I add "I'm an invalid data" to the inputfield "#content [name='telefone']"
            And   I click on the button "#content .button.medium"
        Then  I expect that element "#content .telefone .inputBox" has the class "invalid"

	Scenario: Test invalid email
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "1111" to the inputfield "#content [name='email']"
            And   I add "No, no, no, no." to the inputfield "#content [name='mensagem']"
            And   I add "(83) 98886-4544" to the inputfield "#content [name='telefone']"
            And   I click on the button "#content .button.medium"
        Then  I expect that element "#content .telefone .inputBox" has the class "invalid"
