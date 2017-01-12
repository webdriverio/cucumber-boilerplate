# Changelog

## [1.1.0] - Unreleased
### Added 
- Changelog
- Unit-tests set-up using Jest
- Basic unit-tests for all Javascript code
- Rules:
-- [Given] `the (element|inputfield) "([^"]*)?"( not)* contains any text`
-- [Then] `I expect that (element|inputfield) "([^"]*)?"( not)* matches the text "([^"]*)?"`
- Lib function `checkIfElementExists` so it can be used by multiple tests to check if an element exists
- Favicon to the demo-app

### Changed
- Moved the boilerplate code from `test/` to `src/` to make clear it's the 
source of the project and separate if from the actual test code.
- ESLint configuration now matches ES6 `comma-dangle`
- Updated dependencies
-- `babel-reset-2015` 
-- `babel-register` 
-- `wdio-phantomjs-service`
-- `webdriverio`
-- `wdio-cucumber-framework`
-- `wdio-spec-reporter`
-- `eslint`
-- `eslint-config-airbnb-base`
- Updated `eslint` & `eslint-config-airbnb-base` dev. dependencies
- Updated rules to make them more logical:
-- [Given] `the (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"`
-- [Given] `the (element|inputfield) "([^"]*)?"( not)* contains any text`
-- [Then] `I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"`
-- [Then] `I expect that (element|inputfield) "([^"]*)?"( not)* contains any text`
- Updated readme
- The demo app http-server now runs in silent mode to prevent console cluttering during tests
- Updated contributing & pull request template with information about unit tests

### Fixed
- Tests that where failing for unclear reasons
-- `CheckClass` now correctly identifies the false case
-- `CheckContent` no longer fails when no expected text is defined
- Chai `expect()` was not used in all tests
- Chai `expect.should` was incorrectly used (is now `expect.to`)
- Tests
-- `clickElement` Now checks if element exists to prevent silent fail
-- `setInputField` Now checks if element exists to prevent silent fail
-- `checkUrlInPath` Now checks for the current domain instead of the baseurl domain

### Removed
- `checkContent` as it is now replaced with `checkContainsText` and `checkContainsAnyText`


## [1.0.0] - 2016-09-23
### Changed
- The boilerplate is now using WebdriverIO 4.2
