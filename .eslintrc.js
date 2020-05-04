module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  }
};
// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     'plugin:vue/essential',
//     '@vue/airbnb',
//   ],
//   parserOptions: {
//     parser: 'babel-eslint',
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//   },
//   overrides: [
//     {
//       files: [
//         '**/__tests__/*.{j,t}s?(x)',
//         '**/tests/unit/**/*.spec.{j,t}s?(x)',
//       ],
//       env: {
//         jest: true,
//       },
//     },
//   ],
// };
// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//     jest: true
//   },
//   extends: ['airbnb-base', 'plugin:vue/essential', '@vue/airbnb'],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly'
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module'
//   },
//   rules: {
//     'comma-dangle': ['error', 'never'],
//     'no-param-reassign': ['error', { props: false }]
//   }
// };
