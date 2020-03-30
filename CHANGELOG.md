# Changelog

## [1.4.0] - 2020-03-3ß
### Changed
- Updated WebdriverIO dependencies to v6
- Removed Chai and use [`expect-webdriverio`](https://www.npmjs.com/package/expect-webdriverio) as assertion library

## [1.3.2] - 2017-10-31
### Fixed
- Fixed required Node & Yarn versions in the readme
- Added `checkIfElementExists` to readme & then step definitions (thanks [canvaspixels](https://github.com/canvaspixels))

### Changed
- Updated dependencies

## [1.3.1] - 2017-09-18
### Added
- Add missing tests to select.feature (thanks [silkentrance](https://github.com/silkentrance))

### Fixed
- Fixed selectOption action (thanks [silkentrance](https://github.com/silkentrance))
- Updated Jest & ESLint dependencies
- Fixed ESLint ruleing for `import/no-extraneous-dependencies`
- Fixed `babel-jest` not loaded automatically with Jest 21.x.x

## [1.3.0] - 2017-09-11
### Added
- More Node versions to Travis build
- [Forever](https://www.npmjs.com/package/forever) for managing the `http-server` process

### Changed
- Updated Chai, wdio-cucumber-framework & wdio-spec-reporter dependencies
- Updated codebase to match new Cucumber 2 syntax & functionalities
- Updated readme to reflect changes in the tags processing mechanism

### Fixed
- Syntax issue in `.babelrc`

### Removed
- No longer needed tagprocessor functionality


## [1.2.0] - 2017-07-12
### Added
- Rules:
    - [Given] `I expect that element "([^"]*)?" is( not)* empty$`

### Changed
- Switched to [Yarn](https://yarnpkg.com/) for managing our packages
- Readme to reflect Yarn changes
- Updated dependencies
- Removed no longer needed dependencies Cucumber and Babel-jest
- Locked Webdriverio to 4.7.1 to make sure we don't upgrade before all deprecated functions will be fixed
- Removed specific element/inputfield requirement from checkContainsAnyText, checkContainsText and checkEqualsText check's (thanks [cheapsteak](https://github.com/cheapsteak))

### Fixed
- `checkCointainsText` now correctly checks if the given element actualy contains the given text (thanks [inspiraller](https://github.com/inspiraller))
- Removed unneeded sudo from `clean` script (thanks [l-hendriks](https://github.com/l-hendriks))
- ESLint error's after upgrading ESLint
- Resolved an issue with running `yarn run clean` in Bash (thanks [mondwan](https://github.com/mondwan))
- Fixed `^I expect that element "([^"]*)?" is( not)* empty$` then rule (thanks [stevezxu](https://github.com/stevezxu))


## [1.1.1] - 2017-03-03
### Added
- Requirements section to the readme

### Changed
- Dependency monitor switched from David to VersionEye
- Updated the readme to change the badges & fix the main heading
- Updated dependencies

### Fixed
- CodeClimate integration & test-coverage
- Missing cucumber dependency (problem when installing using Yarn as the peerdependency of the wdio-cucumber-framework is not installed)


## [1.1.0] - 2017-01-14
### Added
- Changelog
- Unit-tests set-up using Jest
- Basic unit-tests for all Javascript code
- Rules:
    - [Given] `the (element|inputfield) "([^"]*)?"( not)* contains any text`
    - [Then] `I expect that (element|inputfield) "([^"]*)?"( not)* matches the text "([^"]*)?"`
- Lib function `checkIfElementExists` so it can be used by multiple tests to check if an element exists
- Favicon to the demo-app

### Changed
- Moved the boilerplate code from `test/` to `src/` to make clear it's the
source of the project and separate if from the actual test code.
- ESLint configuration now matches ES6 `comma-dangle`
- Updated dependencies
    - `babel-reset-2015`
    - `babel-register`
    - `wdio-phantomjs-service`
    - `webdriverio`
    - `wdio-cucumber-framework`
    - `wdio-spec-reporter`
    - `eslint`
    - `eslint-config-airbnb-base`
- Updated `eslint` & `eslint-config-airbnb-base` dev. dependencies
- Updated rules to make them more logical:
    - [Given] `the (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"`
    - [Given] `the (element|inputfield) "([^"]*)?"( not)* contains any text`
    - [Then] `I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"`
    - [Then] `I expect that (element|inputfield) "([^"]*)?"( not)* contains any text`
- Updated readme
- The demo app http-server now runs in silent mode to prevent console cluttering during tests
- Updated contributing & pull request template with information about unit tests
- Updated documentation link for keypress (thanks [@jjanssen](https://github.com/jjanssen))

### Fixed
- Tests that where failing for unclear reasons
    - `CheckClass` now correctly identifies the false case
    - `CheckContent` no longer fails when no expected text is defined
- Chai `expect()` was not used in all tests
- Chai `expect.should` was incorrectly used (is now `expect.to`)
- Tests
    - `clickElement` Now checks if element exists to prevent silent fail
    - `setInputField` Now checks if element exists to prevent silent fail
    - `checkUrlInPath` Now checks for the current domain instead of the baseurl domain

### Removed
- `checkContent` as it is now replaced with `checkContainsText` and `checkContainsAnyText`


## [1.0.0] - 2016-09-23
### Changed
- The boilerplate is now using WebdriverIO 4.2
