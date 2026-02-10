/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // <--- Adicione esta linha
  },
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],
  rules: {
    'react/display-name': [2, { ignoreTranspilerName: true }],
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['error'] }],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
