Shareable eslint config for 4front. Extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with a small number of [customizations](https://github.com/4front/eslint-config-4front/blob/master/custom.js).

## Usage

There are 3 different configs provided: `legacy`, `react`, and `es6`.

### eslint-config-4front/es5

~~~sh
npm install --save-dev eslint-config-4front eslint
~~~

Put the following in your `.eslintrc`:

~~~json
{
  "extends": "4front/es5"
}
~~~

### eslint-config-4front/es6

~~~sh
npm install --save-dev eslint-config-4front babel-eslint eslint
~~~

Put the following in your `.eslintrc`:

~~~json
{
  "extends": "4front/es6"
}
~~~

### eslint-config-4front/react

Assumes React apps are written in ES6 and transpiled with Babel.

~~~sh
npm install --save-dev eslint-config-4front babel-eslint eslint-plugin-react eslint
~~~

Put the following in your `.eslintrc`:

~~~json
{
  "extends": "4front/react"
}
~~~
