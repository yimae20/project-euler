module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    // '@typescript-eslint/no-use-before-define': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
};
