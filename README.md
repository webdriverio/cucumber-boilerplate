Cucumber Boilerplate [![Build Status](https://travis-ci.org/webdriverio/cucumber-boilerplate.svg?branch=master)](https://travis-ci.org/webdriverio/cucumber-boilerplate)
====================

Boilerplate project to run WebdriverIO tests with Cucumber. It is based on a framework called
[yadda](https://github.com/acuminous/yadda) and brings **true** [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development)
to JavaScript and WebdriverIO. Instead of writing complicated test code that only devs can understand,
Cucumber maps an ordinary language to code and allows to start with the test process in the early stages
of your product development.

# Quick start

Choose one of the following options:

1. Download the latest stable release [here](https://github.com/webdriverio/cucumber-boilerplate/archive/master.zip) or
2. Clone the git repo — `git clone https://github.com/webdriverio/cucumber-boilerplate.git`

Then just embed the test directory into the root folder of your project and copy/install the [necessary dependencies
from the package.json](https://github.com/webdriverio/cucumber-boilerplate/blob/master/package.json#L26-L31)
file and you are all set.

## Resolving dependencies

When running the tests for the first time you may need Selenium Standalone Server and ChromeDriver. The exact version(s) and path(s) required will be highlighted as error messages when you [start Selenium server](/README.md#how-to-run-the-test).

Dependencies can found:
- [Selenium releases](https://npm.taobao.org/mirrors/selenium/)
- [ChromeDriver releases](http://chromedriver.storage.googleapis.com/index.html) 

## Features

- Super simple setup
- Full integration with [WebdriverIO](http://webdriver.io/)
- Over 150 predefined steps that cover almost everything you need, you can start writing tests right away
- Easy integration with cloud services like [Sauce Labs](https://saucelabs.com/)
- Support for different languages (French, Spanish, Norwegian, Polish, German, Russian)
- _Integration of WebdriverIO's Multiremote functionality (coming soon)_
- _Easy to run tests in parallel (coming soon)_

# How to write a test

Tests are written in [Gherkin syntax](http://docs.behat.org/en/latest/guides/1.gherkin.html#gherkin-syntax)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./test/features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

__myFirstTest.feature__
```gherkin
Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

Scenario: Check title of website after search
    Given I open the url "http://google.com"
    When I set "WebdriverIO" to the inputfield "#gbqfq"
    And I press "Enter"
    Then I expect that the title is "WebdriverIO - Google Search"

Scenario: Another test
    Given ...

```

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# How to run the test

Start the selenium server:

```sh
$ npm run-script selenium-server
```

Start the local web server:

```sh
$ npm run-script local-webserver
```

To run your tests just call the run.js file:

```sh
$ ./test/run.js
```

# Configurations

To configure your tests, checkout the [`config.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/test/config.js)
file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `config.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
config.<ENVIRONMENT>.js
```

Now you can create a specific config for your pre-deploy tests:

__config.staging.js__
```js
module.config = {
    baseUrl: 'http://staging.example.com'
}
```

Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just set the desired `NODE_ENV` environment variable:

```sh
$ NODE_ENV=staging ./test/run.js
```

# Adding new steps and snippets

The predefined snippets allow you to do a lot of common things but you might need extra snippets which
are better aligned with your aims. To do so you will find all step definitions in `./test/steps`. They
are separated in `given`, `when` and `then`. For instance if you want to have a login step that helps
you to login the browser before each test, you can start to add that as a `given` snippet:

__./test/steps/given.js__
```js
module.exports = function() {

    this.given(/I open the (url|site) "$string"$/, function (type, page, done) {
        var url = type === 'url' ? page : this.baseUrl + page;
        this.browser.url(url , done);
    })

    // ... other predefined snippets
    // ...
    // ...

    /**
     * my login snippet
     */
    .given(/^I login as "$string" with password "$string"$/, function(username, password, done) {
        this.browser
            .setInput('input#username', username)
            .setInput('input#password', password)
            .submitForm('#login')
            .call(done);
    })
```

You define your snippet using regular expressions. This is pretty powerful as it allows you to create complex
sentences with multiple options. Everything that's within `"$string"` gets captured and appended to the
callback. The last argument is always a callback function that you need to call when your step is done.
You can access the browser and your WebdriverIO instance with `this.browser`.

To assert values this boilerplate project comes with a [Chai](http://chaijs.com/) integration. Let's say
you want to check if the username gets display in the header properly. For that we add a new snippet in

__./test/steps/then.js__
```js
module.exports = function(dict) {

    this.then(/^I expect that the title is( not)* "$string"$/,
            require('../support/helper/checkTitle'))

    // ... other predefined snippets
    // ...
    // ...

    /**
     * my check username in header snippet
     */
    .then(/^the username "$string" should be present in the header$/, function(username, done) {
        client.getText('#header .username', function(err, headerUsername) {
            should.not.exist(err);
            username.should.equal(headerUsername, 'username in header doesn\'t match');
        })
        .call(done);
    })
```

That's it. We created two new snippets to test something on our page. We can use these snippets now
in our Scenario like this:

```gherkin
Feature: ...

Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Comments

You can add additional descriptive comments in your feature files.

```gherkin
###
  This is a
  block comment
###
Feature: As a bystander
    I can watch bottles falling from a wall
    So that I can be mildly amused

# This is a single line comment
Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Pending test

If you have failing or unimplemented tests you can mark them as "Pending" so they will get skipped.

```gherkin
// skip whole feature file
@Pending
Feature: ...

// only skip a single scenario
@Pending
Scenario: ...
```

# Isolate test

If you want to run just a single test and ignore the others you can use the `@Only` annotation.

```gherkin
// run test is isolation
@Only
Scenario: ...
```

If there are more tests to isolate use the `@Isolate` annotation.

```gherkin
// run only the "isolated" scenarios
@Isolate
Scenario: ...

Scenario: ...
...

@Isolate
Scenario: ...
```

# List of predefined steps

Check out all predefined snippets. You can see how they get used in [`sampleSnippets.feature`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/test/features/sampleSnippets.feature).

## Given steps

- `/I open the (url|site) "$string"` <br>Open a site in the current browser window/tab
- `the element "$string" is( not)* visible` <br>Check the (in)visibility of a element
- `the element "$string" is( not)* enabled` <br>Check if a element is (not) enabled
- `the element "$string" is( not)* selected` <br>Check if a element is (not) selected
- `the checkbox "$string" is( not)* checked` <br>Check if a checkbox is (not) checked
- `there is (an|no) element "$string" on the page` <br>Check if a element (does not) exist
- `the title is( not)* "$string"` <br>Check the title of the current browser window/tab
- `the element "$string" contains( not)* the same text as element "$string"` <br>Compaire the text of two elements
- `the (element|inputfield) "$string" does( not)* contain the text "$string"` <br>Check if a element contains the given text
- `the (element|inputfield) "$string" does( not)* contain any text` <br>Check if a element does not contain any text
- `the page url is( not)* "$string"` <br>Check the url of the current browser window/tab
- `the( css)* attribute "$string" from element "$string" is( not)* "$string"` <br>Check the value of a element's (css) attribute
- `the cookie "$string" contains( not)* the value "$string"` <br>Check the value of a cookie
- `the cookie "$string" does( not)* exist` <br>Check the existence of a cookie
- `the element "$string" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of a element
- `the element "$string" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of a element
- `I have a screen that is ([\d]+) by ([\d]+) pixels` <br>Set the browser size to a given size
- `I have closed all but the first (window|tab)` <br>Close all but the first browser window/tab
- `a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened

## Then steps

- `I expect that the title is( not)* "$string"` <br>Check the title of the current browser window/tab
- `I expect that element "$string" is( not)* visible` <br>Check if a certain element is visible
- `I expect that element "$string" becomes( not)* visible` <br>Check if a certain element becomes visible
- `I expect that element "$string" is( not)* within the viewport` <br>Check if a certain element is within the current viewport
- `I expect that element "$string" does( not)* exist` <br>Check if a certain element exists
- `I expect that element "$string" does( not)* contain the same text as element "$string"` <br>Compaire the text of two elements
- `I expect that (element|inputfield) "$string"( not)* contains the text "$string"` <br>Check if a element or input field contains the given text
- `I expect that (element|inputfield) "$string" does( not)* contain any text` <br>Check if a element or input field contains any text
- `I expect that (element|inputfield) "$string" is( not)* empty` <br>Check if a element or input field is empty
- `I expect that the url is( not)* "$string"` <br>Check if the the url of the current browser window/tab is a certain string
- `I expect that the path is( not)* "$string"` <br>Check if the path of the url of the current browser window/tab is a certain string
- `I expect the url to( not)* contain "$string"` <br>Check if the url of the current browser window/tab contains a certain string
- `I expect that the( css)* attribute "$string" from element "$string" is( not)* "$string"` <br>Check the value of a element's (css) attribute
- `I expect that checkbox "$string" is( not)* checked` <br>Check if a checkbox is (not) checked
- `I expect that element "$string" is( not)* selected` <br>Check if a element is (not) selected
- `I expect that element "$string" is( not)* enabled` <br>Check if a element is (not) enabled
- `I expect that cookie "$string"( not)* contains "$string"` <br>Check if a cookie with a certain name contains a certain value
- `I expect that cookie "$string"( not)* exists` <br>Check if a cookie with a certain name exist
- `I expect that element "$string" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of an element
- `I expect that element "$string" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of an element
- `I expect that element "$string" (has|does not have) the class "$string"` <br>Check if a element has a certain class
- `I expect a new (window|tab) has( not)* been opened` <br>Check if a new window/tab has been opened
- `I expect the url "$string" is opened in a new (tab|window)` <br>Check if a url is opened in a new browser window/tab
- `I expect that element "$string" is( not)* focused` <br>Check if a element has the focus
- `I wait on element "$string"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*` <br>Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist
- `I expect that a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened
- `I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "$text"` <br>Check the text of a modal

## When steps

- `I (click|doubleclick) on the (link|button|element) "$string"` <br>(Double)click a link, button or element
- `I (add|set) "$string" to the inputfield "$string"` <br>Add or set the content of an input field
- `I clear the inputfield "$string"` <br>Clear an input field
- `I drag element "$string" to element "$string"` <br>Drag a element to another element
- `I submit the form "$string"` <br>Submit a form
- `I pause for (\d+)ms` <br>Pause for a certain number of milliseconds
- `I set a cookie "$string" with the content "$string"` <br>Set the content of a cookie with the given name to  the given string
- `I delete the cookie "$string"` <br>Delete the cookie with the given name
- `I press "$string"` <br>Press a given key. You’ll find all supported characters [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/value). To do that, the value has to correspond to a key from the table.
- `I (accept|dismiss) the (alertbox|confirmbox|prompt)` <br>Accept or dismiss a modal window
- `I enter "$string" into the prompt` <br>Enter a given text into a modal prompt
- `I scroll to element "$string"` <br>Scroll to a given element
- `I close the last opened (window|tab)` <br>Close the last opened browser window/tab
- `I focus the last opened (window|tab)` <br>Focus the last opened browser window/tab
- `I log in to site with username "$string" and password "$string"` <br>Login to a site with the given username and password
- `I select the (\d+)(st|nd|rd|th) option for element "$string"` <br>Select a option based on it's index
- `I select the option with the (name|value|text) "$string" for element "$string"` <br>Select a option based on it's name, value or visible text
- `I move to element "$string"( with an offset of (\d+),(\d+))` <br>Move the mouse by an (optional) offset of the specificed element

# Contributing

Please fork, add specs, and send pull requests! In lieu of a formal style guide, take care to maintain the existing coding style.
Currently not all [WebdriverIO](http://webdriver.io/) commands are mapped and implemented as snippets. Any contributions that
adds new snippets + test are highly welcome.
