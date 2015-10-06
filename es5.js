var _ = require('lodash');

module.exports = _.merge({},
  require('eslint-config-airbnb/rules/best-practices'),
  require('eslint-config-airbnb/rules/errors'),
  require('eslint-config-airbnb/rules/legacy'),
  require('eslint-config-airbnb/rules/node'),
  require('eslint-config-airbnb/rules/strict'),
  require('eslint-config-airbnb/rules/style'),
  require('eslint-config-airbnb/rules/variables'),
  require('./custom'), {
    'env': {
      'browser': true,
      'node': true,
      'amd': false,
      'mocha': false,
      'jasmine': false
    },
    'ecmaFeatures': {},
    'globals': {},
    'rules': {
      'no-param-reassign': 0 // Only allow this for legacy
    }
  }
);
