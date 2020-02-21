module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-useless-constructor': off,
    'space-before-function-paren': off,
    semi: off
  }
};
