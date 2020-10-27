'use strict'

module.exports = {

  root: true,

  parserOptions: {
    parser: 'babel-eslint',
  },

  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },

  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],

  plugins: [
    'jest'
  ],

  rules: {
    'no-console': ["error", { allow: ["warn", "error"] }]
  },

  globals: {
    'use': true
  }
}
