# ESLint Plugin Playground

> Playing around with custom ESLint rules.

## Installation & Usage

-   Install into `package.json` dev dependencies

    ```
    npm i -D neillrobson/eslint-plugin-playground
    ```

-   If you just want the pre-made config:

    -   Add to `extends` array in `.eslintrc.js`:

        ```
        extends: ['plugin:playground/all'],
        ```

-   **OR** If you want to choose specific rules to enforce:

    -   Add to plugins array in `.eslintrc.js`

        ```
        plugins: ['filenames', 'jasmine', 'lodash', 'playground'],
        ```

    -   Add rule to rules object in `.eslintrc.js`

        ```
        rules: { 'playground/no-raw-highcharts': 1 },
        ```

## Development

1. Create a file named `[your rule].js` in the `rules/` directory.
    - The file should export an object as documented by ESLint: https://eslint.org/docs/developer-guide/working-with-rules
    - If traversing Vue files (specifically the `<template>` tag), check the documentation for the Vue ESLint parser: https://github.com/vuejs/vue-eslint-parser/blob/master/docs/ast.md
    - The AST Explorer is a great tool for previewing the structure of the tree you are traversing: https://astexplorer.net/
1. Create a file named `[your rule].test.js` in the `tests/` directory.
    - The RuleTester provided by ESLint makes writing tests extremely declarative and easy. You only need to write strings for valid and invalid inputs, along with the expected auto-fixes. https://eslint.org/docs/developer-guide/working-with-rules#rule-unit-tests
1. Add the rule to the `configs.all.rules` path of the exported object in `index.js`.

## Todo

-   [ ] The fix function for `no-raw-highcharts` does not replace the closing tag of the template component.
