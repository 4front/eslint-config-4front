var merge = require('lodash.merge');

var mergedConfig = merge({},
  require('eslint-config-airbnb-base/rules/best-practices'),
  require('eslint-config-airbnb-base/rules/errors'),
  require('eslint-config-airbnb-base/rules/legacy'),
  require('eslint-config-airbnb-base/rules/node'),
  require('eslint-config-airbnb-base/rules/strict'),
  require('eslint-config-airbnb-base/rules/style'),
  require('eslint-config-airbnb-base/rules/variables'),
  require('eslint-config-airbnb-base/rules/es6'),
  require('./custom'), {
    env: {
      browser: true,
      node: true,
      amd: false,
      mocha: true,
      jasmine: false,
      es6: true
    },
    ecmaFeatures: {},
    globals: {},
    rules: {
      'import/no-unresolved': 0,
    }
  }
);

// For some reason airbnb defines jsx-quotes in the style file.
// This causes problems for projects using es5 or es6 where
// the react-eslint-plugin will not be installed.
delete mergedConfig.rules['jsx-quotes'];

module.exports = mergedConfig;
