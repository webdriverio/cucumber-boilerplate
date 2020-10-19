# Contributing
Please fork, add specs, and send pull requests! Do keep in mind that this is a generic project, so please keep your specs as generic as possible so they can be re-used in other projects.


## Code format & ESLint
The project contains a [editorconfig](http://editorconfig.org/) and [eslint](http://eslint.org/) configuration file, builds will run ESLint with this configuration. To run ESLint localy use the following command:

```sh
npm run test:lint
```


## Testing
The project has a unit-test set-up using [Jest](https://facebook.github.io/jest)
When you add/change a feature test you should add/change a corresponding test(s)

### Testing commands
As stated above the command for validating the code using ESLint is:

```sh
npm run test:lint
```

To run all unit tests use the following command:

```sh
npm run test:unit
```

To run the Cucumber Boilerplate feature tests use:

```sh
npm run test:features
```

To run the complete test suite run:

```sh
npm run test
```

## Note
Currently not all [WebdriverIO](http://webdriver.io/) commands are mapped and implemented as snippets. Any contributions that adds new snippets + test are highly welcome.
