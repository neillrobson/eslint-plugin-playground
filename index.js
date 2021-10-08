const rawHighcharts = require('./rules/raw-highcharts');

module.exports = {
    configs: {
        all: {
            plugins: ['playground'],
            rules: {
                'playground/raw-highcharts': 'warn'
            }
        }
    },
    rules: {
        'raw-highcharts': rawHighcharts
    }
};
