module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'arrow-body-style': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        }],
        'func-names': 'off',
        'consistent-return': 'off',
    },
};
