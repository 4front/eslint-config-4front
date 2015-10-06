var _ = require('lodash');

module.exports = _.merge({},
  require('eslint-config-airbnb/rules/react'),
  require('./es6'), {
    env: {
      node: false,
      mocha: false
    },
    rules: {
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-quotes': 2
    }
  });
