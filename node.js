var merge = require('lodash.merge');

// Config for node v4+ development with select es6 features enabled.
module.exports = merge(
  {},
  require('./es5'),
  {
    parser: 'babel-eslint',
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      // Enable let and const (aka block bindings)
      blockBindings: true,
      classes: false,
      defaultParams: false,
      destructuring: false,
      forOf: true,
      generators: true,
      // Enable modules and global strict mode
      modules: false,
      // Enable computed object literal property names
      objectLiteralComputedProperties: true,
      // Enable duplicate object literal properties in strict mode
      objectLiteralDuplicateProperties: false,
      // Enable object literal shorthand methods
      objectLiteralShorthandMethods: true,
      // Enable object literal shorthand properties
      objectLiteralShorthandProperties: true,
      // Enable octal literals
      octalLiterals: true,
      // Enable the regular expression u flag
      regexUFlag: true,
      // Enable the regular expression y flag
      regexYFlag: true,
      // Enable the rest parameters
      restParams: true,
      // Enable the spread operator for arrays
      spread: true,
      // Enable super references inside of functions
      superInFunctions: false,
      // Enable template strings
      templateStrings: true,
      // Enable code point escapes
      unicodeCodePointEscapes: true,
      // Allow return statements in the global scope
      globalReturn: false,
      // Enable JSX
      jsx: false,
      experimentalObjectRestSpread: false
    }
  }
);
