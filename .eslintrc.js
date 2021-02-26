module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 11,

    },
    rules: {
        indent: [
            'error',
            2,
        ],
        'no-console': [0],

        'linebreak-style': [
            'error',
            'unix',
        ],
        .js text eol = lf,
    },
};