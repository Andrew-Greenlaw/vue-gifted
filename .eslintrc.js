const ALWAYS = 'always'
const NEVER = 'never'
const ERROR = 2
const WARN = 1
const OFF = 0
const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-unused-vars': PROD ? ERROR : WARN,
    'no-console': PROD ? ERROR : WARN,
    'no-debugger': PROD ? ERROR : WARN,
    'space-before-function-paren': [WARN, NEVER],
    'vue/html-self-closing': OFF,
    'vue/multi-word-component-names': OFF
  }
}
