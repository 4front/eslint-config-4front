var _ = require('lodash');

var mergedConfig = _.merge({},
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
    'globals': {}
  }
);

// For some reason airbnb defines jsx-quotes in the style file.
// This causes problems for projects using es5 or es6 where
// the react-eslint-plugin will not be installed.
delete mergedConfig.rules['jsx-quotes'];

module.exports = mergedConfig;
