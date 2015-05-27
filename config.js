module.exports = {
  env: {
    node: true
  },

  rules: {
    // Enforce
    'block-scoped-var': 2,
    'default-case': 2,
    'guard-for-in': 2,
    'strict': [2, 'global'],
    'no-plusplus': 2,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-undefined': 2,
    'no-console': 2,

    // Style
    'comma-style': [1, 'last'],
    'dot-location': [1, 'property'],
    'func-style': [1, 'expression'],
    'linebreak-style': 1,
    'no-continue': 1,
    'no-inline-comments': 1,
    'no-nested-ternary': 1,
    'no-unneeded-ternary': 1,
    'quote-props': [1, 'as-needed'],
    'quotes': [1, 'single'],

    // Relax style
    'camelcase': false,
    'curly': false,
    'key-spacing': false,
    'no-underscore-dangle': false,

    // Relax
    'no-path-concat': false,
    'consistent-return': false
  }
};
