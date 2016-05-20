var merge = require('lodash.merge');

module.exports = merge({},
  require('eslint-config-airbnb'),
  require('./es6'), {
    env: {
      node: false,
      mocha: false
    },
    rules: {
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-closing-bracket-location': [2, 'after-props'],
      'react/jsx-no-bind': 0,
      'react/jsx-first-prop-new-line': 0,
      'react/jsx-space-before-closing': 0
    }
  });
