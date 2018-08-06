Feature: Submitting "Ouvidoria" form
	As an user
	In order to contact the BrasilPrev Team
	I want to be able to submit this forms

	Background:
		Given I open the url "/ouvidoria"

	Scenario: Test message type changing behavior
		When  I click on the element "#label-tipo-sugestao"
        Then  I expect that element ".protocolo-box" is not visible
        When  I click on the element "#label-tipo-elogio"
        Then  I expect that element ".protocolo-box" is not visible
        When  I click on the element "#label-tipo-critica"
        Then  I expect that element ".protocolo-box" is visible

    Scenario: Test all empty fields
        When  I click on the button "#content .button.medium"
        Then  I expect that element "#content .nome .inputBox" has the class "invalid"
            And   I expect that element "#content .telefone .inputBox" has the class "invalid"
            And   I expect that element "#content .email .inputBox" has the class "invalid"
            And   I expect that element "#content .cpf .inputBox" has the class "invalid"
            And   I expect that element "#content .protocolo-box .inputBox" has the class "invalid"
            And   I expect that element "#content .mensagem .textAreaBox" has the class "invalid"

    Scenario: Test submission with all empty fields, try to change the message type and fill all visible fields correctly
        When  I click on the button "#content .button.medium"
        Then  I expect that element "#content .nome .inputBox" has the class "invalid"
            And   I expect that element "#content .telefone .inputBox" has the class "invalid"
            And   I expect that element "#content .email .inputBox" has the class "invalid"
            And   I expect that element "#content .cpf .inputBox" has the class "invalid"
            And   I expect that element "#content .protocolo-box .inputBox" has the class "invalid"
            And   I expect that element "#content .mensagem .textAreaBox" has the class "invalid"

        When  I scroll to element "#content .formBox"
            And   I click on the element "#label-tipo-sugestao"
        Then  I expect that element ".protocolo-box" is not visible

        When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "(83) 98886-4544" to the inputfield "#content [name=telefone]"
            And   I add "theend@skynet.me" to the inputfield "#content [name=email]"
            And   I add "715.354.188-85" to the inputfield "#content [name=cpf]"
            And   I add "1123456789" to the inputfield "#content [name=matricula]"
            And   I add "No, no, no, no. You gotta listen to the way people talk. You don't say AFFIRMATIVE or some like that. You say NO PROBLEM. And if someone comes on to you with an attitude, you say EAT ME. And if you want to shine them on, it's HASTA LA VISTA, BABY" to the inputfield "#content [name=mensagem]"
            And   I click on the button "#content .button.medium"
        Then  I wait on element ".popup-message" to be visible
            And   I expect that element ".formBox .popup-message" contains the text "Mensagem enviada."

    Scenario: Test invalid phone number
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "1111" to the inputfield "#content [name=telefone]"
            And   I add "theend@skynet.me" to the inputfield "#content [name=email]"
            And   I add "715.354.188-85" to the inputfield "#content [name=cpf]"
            And   I add "1123456789" to the inputfield "#content [name=matricula]"
            And   I add "HASTA LA VISTA, BABY" to the inputfield "#content [name=mensagem]"
            And   I click on the button "#content .button.medium"
        Then  I wait on element ".popup-message" to not be visible

    Scenario: Test invalid email
        When  I add "Terminator" to the inputfield "#content input[name=nome]"
            And   I add "(83) 98886-4544" to the inputfield "#content [name=telefone]"
            And   I add "heyho@111111" to the inputfield "#content [name=email]"
            And   I add "715.354.188-85" to the inputfield "#content [name=cpf]"
            And   I add "1123456789" to the inputfield "#content [name=matricula]"
            And   I add "HASTA LA VISTA, BABY" to the inputfield "#content [name=mensagem]"
            And   I click on the button "#content .button.medium"
        Then  I wait on element ".popup-message" to not be visible
