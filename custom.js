// Custom rules that apply to both es5 and es6
module.exports = {
  rules: {
    'id-length': [2, {'min': 2, 'max': 25, 'exceptions': ['_', 'i']}],
    'comma-dangle': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'no-use-before-define': [2, 'nofunc'],
    'new-cap': [2, {'capIsNewExceptions': ['Router']}]
  }
};