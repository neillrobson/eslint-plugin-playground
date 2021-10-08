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
            errors: [
                {
                    messageId: 'rawHighcharts',
                    suggestions: [
                        {
                            messageId: 'useSanitized',
                            output: '<template><sanitized-highcharts /></template>'
                        }
                    ]
                }
            ]
        },
        {
            code: '<template><highcharts v-if="condition" allow-props /></template>',
            errors: [
                {
                    messageId: 'rawHighcharts',
                    suggestions: [
                        {
                            messageId: 'useSanitized',
                            output: '<template><sanitized-highcharts v-if="condition" allow-props /></template>'
                        }
                    ]
                }
            ]
        },
        {
            code: '<template><highcharts></highcharts></template>',
            errors: [
                {
                    messageId: 'rawHighcharts',
                    suggestions: [
                        {
                            messageId: 'useSanitized',
                            output: '<template><sanitized-highcharts></sanitized-highcharts></template>'
                        }
                    ]
                }
            ]
        },
        {
            code: '<template><highcharts v-if="condition" allow-props ></highcharts></template>',
            errors: [
                {
                    messageId: 'rawHighcharts',
                    suggestions: [
                        {
                            messageId: 'useSanitized',
                            output: '<template><sanitized-highcharts v-if="condition" allow-props ></sanitized-highcharts></template>'
                        }
                    ]
                }
            ]
        }
    ]
});
