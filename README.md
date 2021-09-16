# ESLint Plugin Playground

> Playing around with custom ESLint rules.

## Installation & Usage

* Install into `package.json` dev dependencies

    ```
    npm i neillrobson/eslint-plugin-playground
    ```

* Add to plugins array in `.eslintrc.js`

    ```
    plugins: ['filenames', 'jasmine', 'lodash', 'playground'],
    ```

* Add rule to rules object in `.eslintrc.js`

    ```
    'playground/no-raw-highcharts': 1,
    ```

## Development

:construction:

## Todo

* [ ] The fix function for `no-raw-highcharts` does not replace the closing tag of the template component.
