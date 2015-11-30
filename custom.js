// Custom rules that apply to both es5 and es6
module.exports = {
  rules: {
    'id-length': [2, {'min': 2, 'max': 35, 'exceptions': ['_', 'i', 'n']}],
    'comma-dangle': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'one-var': 0,
    'no-use-before-define': [2, 'nofunc'],
    'new-cap': [2, {'capIsNewExceptions': ['Router', 'Readable', 'Writable']}],
    'no-unused-vars': [2, {'varsIgnorePattern': 'debug', 'argsIgnorePattern': '(next|res|err|settings|options)'}]
  }
};
