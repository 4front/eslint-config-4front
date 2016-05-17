var merge = require('lodash.merge');

var mergedConfig = merge({},
  require('eslint-config-airbnb-base/rules/best-practices'),
  require('eslint-config-airbnb-base/rules/errors'),
  require('eslint-config-airbnb-base/rules/legacy'),
  require('eslint-config-airbnb-base/rules/node'),
  require('eslint-config-airbnb-base/rules/strict'),
  require('eslint-config-airbnb-base/rules/style'),
  require('eslint-config-airbnb-base/rules/variables'),
  require('./custom'), {
    env: {
      browser: true,
      node: true,
      amd: false,
      mocha: true,
      jasmine: false
    },
    ecmaFeatures: {},
    globals: {},
    rules: {
      'no-param-reassign': 0, // Only allow this for legacy
      'global-require': 0,
      'no-underscore-dangle': 0
    }
  }
);

// For some reason airbnb defines jsx-quotes in the style file.
// This causes problems for projects using es5 or es6 where
// the react-eslint-plugin will not be installed.
delete mergedConfig.rules['jsx-quotes'];

module.exports = mergedConfig;
