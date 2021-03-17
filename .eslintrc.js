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
    'max-len': ['error', { code: 80, ignoreUrls: true }],
    'comma-dangle': ['error', 'never']
  }
}
