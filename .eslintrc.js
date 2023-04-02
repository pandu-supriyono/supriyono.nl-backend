module.exports = {
    'env': {
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'array-bracket-spacing': [
            'error',
            'never',
        ],
        'computed-property-spacing': [
            'error',
            'never',
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-before-function-paren': [
            'error',
            'never',
        ],
        'max-len': [
            'error',
            {
                'code': 120,
                'ignoreComments': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true,
            },
        ],
    },
    'ignorePatterns': ['dist/**/*'],
};
