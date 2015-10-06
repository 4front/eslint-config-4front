var _ = require('lodash');

module.exports = _.merge({},
  require('eslint-config-airbnb/rules/best-practices'),
  require('eslint-config-airbnb/rules/errors'),
  require('eslint-config-airbnb/rules/legacy'),
  require('eslint-config-airbnb/rules/node'),
  require('eslint-config-airbnb/rules/strict'),
  require('eslint-config-airbnb/rules/style'),
  require('eslint-config-airbnb/rules/variables'),
  require('eslint-config-airbnb/rules/es6'),
  require('./custom'), {
    'env': {
      'browser': true,
      'node': true,
      'amd': false,
      'mocha': true,
      'jasmine': false,
      'es6': true
    },
    'ecmaFeatures': {},
    'globals': {},
    'rules': {
      'jsx-quotes': null // For some reason airbnb defines this in rules/style
    }
  }
);
