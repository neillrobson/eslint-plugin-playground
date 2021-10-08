const rule = require('../rules/raw-highcharts');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester({
    parser: require.resolve('vue-eslint-parser')
});

ruleTester.run('raw-highcharts', rule, {
    valid: [
        {
            code: '<template></template>'
        },
        {
            code: '<template><sanitized-highcharts /></template>'
        },
        {
            code: '<template><sanitized-highcharts></sanitized-highcharts></template>'
        },
        {
            code: '<template><sanitized-highcharts v-if="condition" allow-props /></template>'
        },
        {
            code: '<template><sanitized-highcharts v-if="condition" allow-props></sanitized-highcharts></template>'
        }
    ],
    invalid: [
        {
            code: '<template><highcharts /></template>',
            output: '<template><sanitized-highcharts /></template>',
            errors: [{ message: "Use Pendo's sanitized-highcharts component instead." }]
        },
        {
            code: '<template><highcharts v-if="condition" allow-props /></template>',
            output: '<template><sanitized-highcharts v-if="condition" allow-props /></template>',
            errors: [{ message: "Use Pendo's sanitized-highcharts component instead." }]
        },
        {
            code: '<template><highcharts></highcharts></template>',
            output: '<template><sanitized-highcharts></sanitized-highcharts></template>',
            errors: [{ message: "Use Pendo's sanitized-highcharts component instead." }]
        },
        {
            code: '<template><highcharts v-if="condition" allow-props ></highcharts></template>',
            output: '<template><sanitized-highcharts v-if="condition" allow-props ></sanitized-highcharts></template>',
            errors: [{ message: "Use Pendo's sanitized-highcharts component instead." }]
        }
    ]
});
