module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'max-len': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
  },
};
