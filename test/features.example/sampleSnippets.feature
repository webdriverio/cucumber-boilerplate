Feature: Sample Snippets test
    As a developer
    I should be able to use given text snippets

    #@Isolate
    Scenario: open URL
        Given the page url is not "http://webdriverjs.christian-bromann.com/"
        And   I open the url "http://webdriverjs.christian-bromann.com/"
        Then  I expect that the url is "http://webdriverjs.christian-bromann.com/"
        And   I expect that the url is not "http://google.com"

    Scenario: open sub page of weburl
        Given the page url is not "http://webdriverjs.christian-bromann.com/two.html"
        And   I open the url "http://webdriverjs.christian-bromann.com/"
        Then  I expect that the url is "http://webdriverjs.christian-bromann.com/"
        And   I expect that the url is not "http://google.com"

    Scenario: click on link
        Given the title is not "two"
        And   I open the url "http://webdriverjs.christian-bromann.com/"
        When  I click on the link "two"
        Then  I expect that the title is "two"

    Scenario: click on button
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".btn1_clicked" is not visible
        When  I click on the button ".btn1"
        Then  I expect that element ".btn1_clicked" is visible

    Scenario: double click on a button
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".btn1_dblclicked" is not visible
        When  I doubleclick on the element ".btn1"
        Then  I expect that element ".btn1_dblclicked" is visible

    #@Isolate
    Scenario: click on element
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".btn1_clicked" is not visible
        When  I click on the element ".btn1"
        Then  I expect that element ".btn1_clicked" is visible

    Scenario: add value to an input element
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the inputfield "//html/body/section/form/input[1]" does not contain the text "abc"
        When  I add "bc" to the inputfield "//html/body/section/form/input[1]"
        Then  I expect that inputfield "//html/body/section/form/input[1]" contains the text "abc"

    Scenario: set value to an input element
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the inputfield "//html/body/section/form/input[1]" does not contain the text "bc"
        When  I set "bc" to the inputfield "//html/body/section/form/input[1]"
        Then  I expect that inputfield "//html/body/section/form/input[1]" contains the text "bc"

    Scenario: clear value of input element
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        When  I set "test" to the inputfield "//html/body/section/form/input[1]"
        And   I clear the inputfield "//html/body/section/form/input[1]"
        Then  I expect that inputfield "//html/body/section/form/input[1]" does not contain any text

    Scenario: drag n drop
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the inputfield ".searchinput" does not contain the text "Dropped!"
        When  I drag element "#overlay" to element ".red"
        Then  I expect that inputfield ".searchinput" contains the text "Dropped!"

    Scenario: submit form
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   there is no element ".gotDataA" on the page
        When  I submit the form ".send"
        Then  I expect that element ".gotDataA" is visible

    Scenario: wait for element
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   there is no element ".lateElem" on the page
        Then  I wait on element ".lateElem" for 5000ms to be visible

    Scenario: wait for element using default wait time
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   there is no element ".lateElem" on the page
        Then  I wait on element ".lateElem" to be visible

    Scenario: pause
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   there is no element ".lateElem" on the page
        When  I pause for 3000ms
        Then  I expect that element ".lateElem" is visible

    Scenario: query title
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the title is "WebdriverJS Testpage"
        And   the title is not "Other title"
        Then  I expect that the title is "WebdriverJS Testpage"
        And   I expect that the title is not "Other title"

    Scenario: check visibility
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".btn1" is visible
        And   the element ".btn1_clicked" is not visible
        Then  I expect that element ".btn1" is visible
        And   I expect that element ".btn1_clicked" is not visible

    Scenario: compare texts
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element "#secondPageLink" contains the same text as element "#secondPageLink"
        And   the element "#secondPageLink" contains not the same text as element "#githubRepo"
        Then  I expect that element "#secondPageLink" does contain the same text as element "#secondPageLink"
        And   I expect that element "#secondPageLink" does not contain the same text as element "#githubRepo"

    Scenario: check text content
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element "#secondPageLink" does contain the text "two"
        And   the element "#secondPageLink" does not contain the text "andere linktext"
        Then  I expect that element "#secondPageLink" contains the text "two"
        And   I expect that element "#secondPageLink" not contains the text "anderer linktext"

    Scenario: check input content
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the inputfield "//html/body/section/form/input[1]" does contain the text "a"
        And   the inputfield "//html/body/section/form/input[1]" does not contain the text "aa"
        Then  I expect that inputfield "//html/body/section/form/input[1]" contains the text "a"
        And   I expect that inputfield "//html/body/section/form/input[1]" not contains the text "aa"

    Scenario: check attribut
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the attribute "data-foundby" from element "#newWindow" is "partial link text"
        And   the attribute "data-foundby" from element "#newWindow" is not "something else"
        Then  I expect that the attribute "data-foundby" from element "#newWindow" is "partial link text"
        And   I expect that the attribute "data-foundby" from element "#newWindow" is not "something else"

    Scenario: check css attribut
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the css attribute "background-color" from element ".red" is "rgba(255,0,0,1)"
        And   the css attribute "background-color" from element ".red" is not "rgba(0,255,0,1)"
        Then  I expect that the css attribute "background-color" from element ".red" is "rgba(255,0,0,1)"
        And   I expect that the css attribute "background-color" from element ".red" is not "rgba(0,255,0,1)"

    Scenario: check width and height
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".red" is 102px broad
        And   the element ".red" is 102px tall
        And   the element ".red" is not 103px broad
        And   the element ".red" is not 103px tall
        Then  I expect that element ".red" is 102px broad
        And   I expect that element ".red" is 102px tall
        And   I expect that element ".red" is not 103px broad
        And   I expect that element ".red" is not 103px tall

    Scenario: check offset
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the element ".red" is positioned at 15px on the x axis
        And   the element ".red" is positioned at 242px on the y axis
        And   the element ".red" is not positioned at 16px on the x axis
        And   the element ".red" is not positioned at 243px on the y axis
        Then  I expect that element ".red" is positioned at 15px on the x axis
        And   I expect that element ".red" is positioned at 242px on the y axis
        And   I expect that element ".red" is not positioned at 16px on the x axis
        And   I expect that element ".red" is not positioned at 243px on the y axis

    Scenario: check selected
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the checkbox ".checkbox_notselected" is not checked
        When  I click on the element ".checkbox_notselected"
        Then  I expect that checkbox ".checkbox_notselected" is checked

    Scenario: set / read cookie
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the cookie "test" does not exist
        When  I set a cookie "test" with the content "test123"
        Then  I expect that cookie "test" exists
        And   I expect that cookie "test" contains "test123"
        And   I expect that cookie "test" not contains "test1234"

    Scenario: delete cookie
        Given I open the url "http://webdriverjs.christian-bromann.com/"
        And   the cookie "test" does exist
        When  I delete the cookie "test"
        Then  I expect that cookie "test" not exists
