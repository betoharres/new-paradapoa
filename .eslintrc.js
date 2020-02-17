const OFF = 0, WARN = 1, ERROR = 2

module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true
  },
  extends: ['standard', 'standard-react', 'prettier', 'prettier/standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'standard',
  ],
  rules: {
    "react/jsx-uses-react": ERROR,
    "react/jsx-uses-vars": ERROR,
    "react-native/no-unused-styles": ERROR,
    "react-native/no-inline-styles": ERROR,
    "react-native/no-color-literals": ERROR,
    "react-native/no-raw-text": OFF,
    "jsx-quotes": [ERROR, 'prefer-double'],
    'no-console': ERROR,
    "space-before-function-paren": OFF,
    "max-len": [ERROR, { code: 80, tabWidth: 2 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'comma-dangle': [ERROR,
      {
        imports: 'always-multiline',
        exports: 'always-multiline',
        objects: 'always-multiline',
        arrays: 'always-multiline',
      }
    ]
  }
}

