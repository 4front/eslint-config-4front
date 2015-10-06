var _ = require('lodash');

module.exports = _.merge({},
  require('eslint-config-airbnb/rules/react'),
  require('./es6'), {
    env: {
      node: false,
      mocha: false
    }
  });