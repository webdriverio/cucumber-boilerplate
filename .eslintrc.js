module.exports = {
    // Enforcing ES6 and Node environments
    env: {
        es6: true,
        node: true
    },
    // Using the airbnb base configuration
    extends: [
        'eslint-config-airbnb-base/rules/best-practices',
        'eslint-config-airbnb-base/rules/errors',
        'eslint-config-airbnb-base/rules/node',
        'eslint-config-airbnb-base/rules/style',
        'eslint-config-airbnb-base/rules/variables',
        'eslint-config-airbnb-base/rules/es6',
        'eslint-config-airbnb-base/rules/strict',
    ].map(require.resolve),
    // Define the global variables we use
    globals: {
        assert: true,
        browser: true,
        expect: true,
    },
    // Set the ecma version to 6
    parserOptions: {
        ecmaVersion: 6,
    },
    // Custom rules
    rules: {
        strict: 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            }
        ],
        'max-len': [
            'error',
            80,
            {
                ignorePattern: '\\s*\\/\\^(.*)\\$\\/,$',
            }
        ],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNewExceptions: [
                    'Given',
                    'When',
                    'Then',
                ]
            }
        ],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                }
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                requireReturn: false,
                matchDescription: '.+',
            }
        ],
    }
};
