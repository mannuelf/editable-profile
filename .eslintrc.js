module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': ['error', {
      arrowParens: 'always',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      printWidth: 80,
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'none',
      useTabs: false
    }]
  }
}
