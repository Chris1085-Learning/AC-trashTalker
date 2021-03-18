module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'comma-dangle': ['error', 'never'],
    prettier: {
      'space-before-function-paren': ['error', 'never']
    }
  }
}
